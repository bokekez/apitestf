import React, { useState } from 'react';
import Register from './Register';
import Card from './Card'

function App() {


return (
    <div>
      <h1 className='tc'>Create user</h1>
      <Register/>
      <Card/>
    </div>
  );
}

export default App;
