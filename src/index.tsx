import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'index.scss';

ReactDOM.render(
  //  取消严格模式，防止触发多次生命周期
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

