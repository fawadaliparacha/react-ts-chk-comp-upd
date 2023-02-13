import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)(</p>
      <ComponentB />
    </div>
  );
}

const ComponentA = () => {
  const [myState, setMyState] = React.useState("I'm from componentA");

  React.useEffect(() => {
    console.log(myState);
  }, [myState]);

  const btnClick = () => {
    setMyState('State changed from A');
  };

  return (
    <React.Fragment>
      <h5>{myState}</h5>
      <button onClick={btnClick}>Click</button>
    </React.Fragment>
  );
};

const ComponentB = () => {
  const [myState, setMyState] = React.useState("I'm from componentB");

  React.useEffect(() => {
    console.log(myState);
  }, [myState]);

  return (
    <React.Fragment>
      <ComponentA />
      <h5>{myState}</h5>
    </React.Fragment>
  );
};
