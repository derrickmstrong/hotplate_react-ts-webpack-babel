import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import cartoon from './images/cartoon.jpg';

export const App = (): JSX.Element => {
  const sum = (a: number, b: number): number => a + b;
  const hello: string = 'Hello "Mario" World!';

  return (
    <Fragment>
      <h1>
        {hello} You're no. {sum(1, 0)}
      </h1>
      <img src={cartoon} width="500"/>
    </Fragment>
  );
};

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
