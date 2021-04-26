import React, { useState, useEffect } from 'react';
import { HelloWorld, makeThunkFetch } from 'test-one';
import logo from './logo.svg';
import './App.css';
import { useIsMobile } from './utils/mediaQueryHooks';

interface AppProps {}

function App({}: AppProps) {
  const [count, setCount] = useState(0);
  useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  makeThunkFetch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
