import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
ReactDom.render(<App/>, document.getElementById('app'));
setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 5000);