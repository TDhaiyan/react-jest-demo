// import reactLogo from './assets/react.svg';
// import viteLogo from './assets/vite.svg';
import { counterActions } from './redux/counter/slice';
import { useAppDispatch, useAppSelector } from './redux/hooks';
// import { Counter } from './components';
import { useState, Suspense } from 'react'
import {Page} from './useTest'
import {User} from './Suspense'
// import { ErrorBoundary } from 'react-error-boundary'

import './App.css';

function App() {
  const dispatch = useAppDispatch();

  const { value } = useAppSelector((state) => state.counter);

  const increment = (): void => {
    dispatch(counterActions.increment());
  };

  const decrement = (): void => {
    dispatch(counterActions.decrement());
  };

  const incrementAsync = (): void => {
    dispatch(counterActions.incrementAsync());
  };

  const decrementAsync = (): void => {
    dispatch(counterActions.decrementAsync());
  };


  // https://codesandbox.io/p/sandbox/spring-water-929i6?file=%2Fsrc%2Findex.js

    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    function handleClick() {
      setCount(c => c + 1); // Does not re-render yet
      setFlag(f => !f); // Does not re-render yet
      // React will only re-render once at the end (that's batching!)
    }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter
          onIncrement={increment}
          onDecrement={decrement}
          onIncrementAsync={incrementAsync}
          onDecrementAsync={decrementAsync}
          value={value}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <div>
        <button onClick={handleClick}>Next</button>
        <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
      </div> */}


      {/* </div> */}

      <Page ></Page>

      <div className="App">
        {/* <ErrorBoundary FallbackComponent={<p>Error.....</p>}> */}
          <Suspense fallback={<p>Loading.....</p>}>
            <User/>
          </Suspense>
          {/* </ErrorBoundary> */}
      </div>

      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
