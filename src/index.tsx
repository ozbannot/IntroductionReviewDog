import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

console.log('foo'); // <- 追加
ReactDOM.render(<App />, document.getElementById('root'));
