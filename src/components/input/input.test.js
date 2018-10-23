import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input />, div);
});
