import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import {Button} from 'react-bootstrap';


function App() {

  
  return (
    <div>
      <h1></h1>
      <input type="text" maxLength="9" minlength="9"/>
      <Button className="mx-2">Get Card Details</Button>
      <br />
    </div>
  );
}

export default App;
