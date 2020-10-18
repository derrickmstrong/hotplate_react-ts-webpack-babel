import React from 'react';
import ReactDOM from 'react-dom';

export const App = (): JSX.Element => {
  const sum = (a: number, b: number): number => a + b;
  const hello: string = 'Hello (Mario) World!';

  return (
      <h1>{hello} You're no. {sum(1, 0)}</h1>
  );
};

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
