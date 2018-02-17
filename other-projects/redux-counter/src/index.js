import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Redux 관련 불러오기
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './components/counters/CounterReducer';
import { Provider } from 'react-redux';

// 스토어 생성
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunk
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
