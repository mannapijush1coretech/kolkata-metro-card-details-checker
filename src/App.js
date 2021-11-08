import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import {Button} from 'react-bootstrap';


function App() {
  const [resdef,setResDef]=useState({
    status:'-200',
    msg:"Invalid Card!"
  });
  const [cardNo,setCardNo]=useState('');
  const [data,setData]=useState({
    data:'',
    loading:true
  });

  const getCard= async() =>{
    //const res=await fetch(process.env.API_URL+"");
    if(cardNo.length==9){
      console.log(cardNo);
      const res=await fetch(process.env.REACT_APP_API_URL+"cardNumber="+cardNo+"&reCardNumber="+cardNo);
      console.log(res);
    }else{
      
    }
  }
  
  return (
    <div className="vw-75">
      <h2>Kolkata Metro Card Utility</h2>
      <input value={cardNo} onChange={e=>setCardNo(e.target.value)} className="form-control vw-25" type="text" maxLength="9" minLength="9"/>
      <Button onClick={getCard}className="m-2">Get Card Details</Button>
      <br />
      <div>{resdef.status=='-200'?resdef.msg:""}</div>
    </div>
  );
}

export default App;
