import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/main.scss";
import RootContainer from './containers/RootContainer.jsx';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('content')
  );
}

render(RootContainer);

if (module.hot) {
  module.hot.accept('./containers/RootContainer.jsx', () => {
    const NextRootContainer = require('./containers/RootContainer.jsx').default;
    render(NextRootContainer);
  });
}