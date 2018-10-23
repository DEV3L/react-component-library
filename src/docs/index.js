import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../components/Button';
import { Input } from '../components/input/input';
const App = () => (
  <div>
    <h1>React Component Library</h1>
    <h2>Button</h2>
    <Button text="Click me!" />
    <Input type="text" title="please work... harambe help us" />
  </div>
);
ReactDOM.render(<App />, document.getElementById('root'));
