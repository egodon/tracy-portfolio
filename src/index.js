import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

export default App;

if (module.hot) module.hot.accept();

if (typeof document !== 'undefined') {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render;
  const render = (Comp) => {
    renderMethod(<Comp />, document.getElementById('root'));
  };

  render(App);
}
