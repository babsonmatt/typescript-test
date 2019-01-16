import * as React from 'react';
import { render } from 'react-dom';
import { EnhancedSomething } from './something';

import './styles.css';

const rootElement = document.getElementById('root');

const moo = (a: string): void => {
  console.log('mooooo');
};

render(<EnhancedSomething moo={moo} cow={'bbbb'} />, rootElement);
