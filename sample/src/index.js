import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App student={{name: 'Jonathan', age: 20}}/>, document.getElementById('root'));
registerServiceWorker();
