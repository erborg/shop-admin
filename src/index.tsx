import { render } from 'react-dom';
import Shop from './Shop';
import * as React from 'react';

function App() {
  return <Shop />;
}

render(<App />, document.querySelector('#root'));
