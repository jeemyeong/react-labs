import { createAction } from 'redux-actions';
import * as CounterActionTypes from './CounterActionTypes';

export const counterActions = {
  create({color}) {
    return (dispatch) => {
      dispatch(createAction(CounterActionTypes.CREATE)({color}))
    }
  },
  remove() {
    return (dispatch) => {
      dispatch(createAction(CounterActionTypes.REMOVE)())
    }
  },
  increment({index}) {
    return (dispatch) => {
      dispatch(createAction(CounterActionTypes.INCREMENT)({index}))
    }
  },
  decrement({index}) {
    return (dispatch) => {
      dispatch(createAction(CounterActionTypes.DECREMENT)({index}))
    }
  },
  setColor({index, color}) {
    return (dispatch) => {
      dispatch(createAction(CounterActionTypes.SET_COLOR)({index, color}))
    }
  },
}