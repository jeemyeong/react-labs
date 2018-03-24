import { compose, withState, withHandlers, withProps } from 'recompose';
import React, { Component } from 'react';

export default compose(
    withState('isVisible', 'toggleVis', false),
    withHandlers({
        toggleVisibility: ({ toggleVis, isVisible }) => {
            return (event) => {
                return toggleVis(n => !n);
            };
        },
    }),
    withProps(({ isVisible }) => {
        return {
            title: isVisible ? 'This is the visible title' : 'This is the default title',
            message: isVisible ? 'Hello I am Visible' : 'I am not visible yet, click the button!',
        };
    })
)(Presentation);

function Presentation({ title, message, toggleVisibility, isVisible, ...args }) {
    console.log(args)
    return  (
        <div>
            <h1>{title}</h1>
            {isVisible ? <p>I'm visible</p> : <p> Not Visible </p>}
            <p>{message}</p>
            <button onClick={toggleVisibility}> Click me! </button>
        </div>
    );
}