import React, { Component } from 'react';
export default function Presentation({ title, message, toggleVisibility, isVisible, ...args }) {
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