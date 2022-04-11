import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
       setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);
  // useCallback passes our function as a first argument and stores it in memory
  // useCallback then returns that stored function and reuses that same function object 
  // useCallback tells React to reuse the same function when re-rendering, therefore optimizing performance 

  // the second argument for useCallback is an array for dependencies
  // whenever the variable in the array changes and has a new value, we want to recreate 
  // that function and store that new recreated function 
  // this ensures we always use the latest value 


  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show ={showParagraph} />
      {/* show is a prop in DemoOutput.js */}
      <Button onClick={allowToggleHandler}>Allow Paragraph!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
