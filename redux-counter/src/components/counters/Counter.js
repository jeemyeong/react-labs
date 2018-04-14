import React from 'react';
import './Counter.css';
import { getRandomColor } from 'utils';
import squize from 'lib/hoc/scuize';

const Counter = ({ number, color, index, counterActions }) => {
  console.log(`${index} 번째 카운터 렌더`)
  return (
    <div
      className="Counter"
      onClick={() => counterActions.increment({index})}
      onContextMenu={
        (e) => {
          e.preventDefault();
          counterActions.decrement({index});
        }
      }
      onDoubleClick={() => {
        const color = getRandomColor();
        counterActions.setColor({index, color})
      }}
      style={{ backgroundColor: color }}>
      {number}
    </div>
  );
};

export default squize(function (nextProps, nextState) {
  return this.props.color !== nextProps.color || this.props.number !== nextProps.number ;
})(Counter);