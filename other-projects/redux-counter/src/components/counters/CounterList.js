import React from 'react';
import Counter from './Counter';
import { counterActions } from '../modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import './CounterList.css';

const CounterList = ({ counters, increment, decrement, setColor, counterActions }) => {
  const counterList = counters.map(
    (counter, i) => (
      <Counter
        key={i}
        index={i}
        {...counter}
        counterActions={counterActions}
      />
    )
  );

  return (
    <div className="CounterList">
      {counterList}
    </div>
  );
};

const mapStateToProps = (state) => ({
  counters: state.counters
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  counterActions: bindActionCreators(counterActions, dispatch)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);
