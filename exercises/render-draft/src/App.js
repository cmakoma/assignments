import React from 'react';
import Toggle from './shared/Toggle';

const App = () => {
  return (
  <Toggle render={({isToggled,toggler}) =>  
    <>
      <h1> The light is {isToggled? "On":"Off"}</h1>
      <button onClick={toggler}>Switch</button>
    </>
  }/>
  );
};

export default App;