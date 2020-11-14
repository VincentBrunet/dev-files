import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { Application } from './components/Application';

// Create main element
const mainElement = document.createElement('div');
document.body.innerHTML = '';
document.body.appendChild(mainElement);

// Render components
const HotApplication = hot(() => <Application />);
ReactDOM.render(
  <AppContainer>
    <HotApplication />
  </AppContainer>,
  mainElement
);
