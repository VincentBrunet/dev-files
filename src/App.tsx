import React from 'react';
import { render } from 'react-dom';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Greetings />
    </>
  );
};

render(<App />, mainElement);
