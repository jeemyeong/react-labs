import React from 'react';
import { counterActions } from '../modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getRandomColor } from 'utils';
import './Buttons.css';

const Buttons = ({ remove, counterActions, dispatch }) => {
  return (
    <div className="Buttons">
      <div className="btn add" onClick={() => counterActions.create({color: getRandomColor()})}>
        생성
      </div>
      <div className="btn remove" onClick={() => counterActions.remove()}>
        제거
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  counterActions: bindActionCreators(counterActions, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Buttons);