import { handleActions } from 'redux-actions';
import * as CounterActionTypes from './CounterActionTypes';

// 초기 상태를 정의합니다.
const initialState = {
  counters: [
    {
      color: 'black',
      number: 0
    }
  ]
}

export default handleActions({
  [CounterActionTypes.SET_COLOR]: (state, action) => ({
    counters: [
      ...state.counters.slice(0, action.payload.index),
      {
        ...state.counters[action.payload.index],
        color: action.payload.color
      },
      ...state.counters.slice(action.payload.index + 1, state.counters.length)
    ]
  }),
}, initialState);