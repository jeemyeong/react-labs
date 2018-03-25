import React from 'react';
import {defaultProps,
  renameProps,
  compose,
  withProps,
  flattenProp,
  withState,
  withHandlers,
  mapProps,
  branch,
  renderComponent,
} from 'recompose';

const finalEnhance = compose(
  defaultProps({
    student: {
      name: 'Jeemyeong',
      age: 17
    }
  }),
  // renameProps({
  //   counter: 'xCounter'
  // }),
  // withProps({
  //   student: {
  //     name: 'Jeemyeong',
  //     age: 17
  //   }
  // }),
  mapProps(({student, ...rest}) => {
    return {
      ...rest,
      student: {
        name: student.name.toUpperCase(),
        age: student.age
      }
    }
  }),
  flattenProp('student'),
  withState('counter', 'updateCounter', 0),
  withHandlers({
    increment: ({updateCounter}) => () => updateCounter(counter => counter + 1)
  }),
  branch(
    ({ age }) => age < 18,
    renderComponent(Under18)
  )
)
const ProductsLink = withProps({ href: '#/products' })('a');
const A = 'h2'
const UNAUTHENTICATED = 401;
const UNAUTHORIZED = 403;

const errorMsgs = {
  [UNAUTHENTICATED]: 'Not Authenticated!',
  [UNAUTHORIZED]: 'Not Authorized!',
};
console.log(errorMsgs)
function App({name, age, counter, increment, ...rest}) {
  console.log(rest)
  console.log({
    helloWorld() {
      console.log("HELLO WORLD")
    }
  })
  return (
    <div>
      <A>hello</A>
      <ProductsLink>Products</ProductsLink>

      <h1>Hello App function {counter}</h1>
      <h1>My name is {name}. My age is {age}</h1>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
};

function Under18({name, age, ...rest}) {

  return (
    <div>
      <h1>Hey {name}, you are under 18</h1>
    </div>
  )
}

export default finalEnhance(App);