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
  [CounterActionTypes.CREATE]: (state, action) => ({
    counters: [
      ...state.counters,
      {
        color: action.payload.color,
        number: 0
      }
    ]
  }),
  [CounterActionTypes.REMOVE]: (state, action) => ({
    counters: state.counters.slice(0, state.counters.length - 1)
  }),
  [CounterActionTypes.INCREMENT]: (state, action) => ({
    counters: [
      ...state.counters.slice(0, action.payload.index),
      {
        ...state.counters[action.payload.index],
        number: state.counters[action.payload.index].number + 1
      },
      ...state.counters.slice(action.payload.index + 1, state.counters.length)
    ]
  }),
  [CounterActionTypes.DECREMENT]: (state, action) => ({
    counters: [
      ...state.counters.slice(0, action.payload.index),
      {
        ...state.counters[action.payload.index],
        number: state.counters[action.payload.index].number - 1
      },
      ...state.counters.slice(action.payload.index + 1, state.counters.length)
    ]
  }),
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