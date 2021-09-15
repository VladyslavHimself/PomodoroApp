import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';

const application : JSX.Element = (
  <App />
);

ReactDOM.render(application, document.getElementById('root'));
