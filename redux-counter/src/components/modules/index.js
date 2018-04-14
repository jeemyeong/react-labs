import { createAction, handleActions } from 'redux-actions';

// 액션 타입 
export const counterActionType = {
  CREATE: 'counter/CREATE',
  REMOVE: 'counter/REMOVE',
  INCREMENT: 'counter/INCREMENT',
  DECREMENT: 'counter/DECREMENT',
  SET_COLOR: 'counter/SET_COLOR',
}

// 액션 생성자
export const counterActions = {
  create: createAction(counterActionType.CREATE), // color
  remove: createAction(counterActionType.REMOVE),
  increment: createAction(counterActionType.INCREMENT), // index
  decrement: createAction(counterActionType.DECREMENT), // index
  setColor: createAction(counterActionType.SET_COLOR), // { index, color }
}


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
  [counterActionType.CREATE]: (state, action) => ({
    counters: [
      ...state.counters,
      {
        color: action.payload.color,
        number: 0
      }
    ]
  }),
  [counterActionType.REMOVE]: (state, action) => ({
    counters: state.counters.slice(0, state.counters.length - 1)
  }),
  [counterActionType.INCREMENT]: (state, action) => ({
    counters: [
      ...state.counters.slice(0, action.payload.index),
      {
        ...state.counters[action.payload.index],
        number: state.counters[action.payload.index].number + 1
      },
      ...state.counters.slice(action.payload.index + 1, state.counters.length)
    ]
  }),
  [counterActionType.DECREMENT]: (state, action) => ({
    counters: [
      ...state.counters.slice(0, action.payload.index),
      {
        ...state.counters[action.payload.index],
        number: state.counters[action.payload.index].number - 1
      },
      ...state.counters.slice(action.payload.index + 1, state.counters.length)
    ]
  }),
  [counterActionType.SET_COLOR]: (state, action) => ({
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