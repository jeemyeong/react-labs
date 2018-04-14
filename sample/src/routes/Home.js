import React, { Component } from 'react'

function createStore(reducer) {
  let state = reducer(undefined, { type: "@@INIT" })
  function dispatch(action) {
    state = reducer(state, action)
    return state
  }
  function getState() {
    return state
  }
  return {
    dispatch,
    getState
  }
}

const initialState = {
  text: "HELLO",
  todos: []
}
function todoApp(state = initialState, action) {
  switch (action.type) {
    case "HI":
      return [
        ...state,
        {
          text: action.text,
        }
      ]
    default:
      return state
  }
}
let store = createStore(todoApp)
store.dispatch({
  type: "HI",
  text: "HELLO?"
})
console.log(
  store.getState()
);

export default class Home extends Component {
  render() {
    return (
      <div>
        I am Home
      </div>
    )
  }
}
