import React from 'react';
import { useEffect, useState,useRef } from 'react';
import './App.css';
import {Button,TextField,Container,Snackbar,BottomNavigation,BottomNavigationAction} from '@material-ui/core';
import {Alert} from '@material-ui/lab';
import {SpinnerDotted} from 'spinners-react';
import {FaceTwoTone,CloudDownload,LocationCityTwoTone} from '@material-ui/icons'


function App() {
  const txtRef=useRef('');
  const [resdef,setResDef]=useState(false);
  const [isLoading,setIsLoading]=useState('');
  const [cardNo,setCardNo]=useState('');
  const [data,setData]=useState({
    data:'',
    loading:true
  });

  const getCard= async() =>{
    var cardnum=txtRef.current.value;
    setCardNo(cardnum);
    console.log("id -"+cardnum);
    //const res=await fetch(process.env.API_URL+"");
    if(cardnum.length==9){
      setResDef(true);
      setIsLoading(true);
      console.log(cardnum);
      const res=await fetch(process.env.REACT_APP_API_URL+cardnum)
      .then(res=>res.json())
      .then(res=> {setData({
        data:res,
        loading:false
      })})
      setIsLoading(false);
      console.log(data.data);
    }else{
      
    }
  }
  
  return (
    <Container maxWidth="sm">
      <h2 className="centerTxt">Kolkata Metro Card Utility</h2>
      <TextField color="secondary"inputRef={txtRef}id="outlined-basic" fullWidth variant="filled"label="Enter Card Number"  />
      <center><Button color="secondary" startIcon={<CloudDownload/>} variant="contained" onClick={getCard}className="mt-2 centerItem">Get Card Details</Button></center>
      <br />
      {!resdef?'':(
        <div className="p-2 bg-dark fw-normal border border-danger rounded">
          <div >{
          isLoading?(<div className="centerItem"><SpinnerDotted color="#ad0048"/></div>): (
            <div>{
              data.data.balance>=30 && 
                <p className="centerTxt text-success fs-5">Balance - ₹ {data.data.balance}</p>
              }
              {
                data.data.balance<30 &&
                <p className="centerTxt text-danger fs-5">Balance - ₹ {data.data.balance}</p>
              }
              <div className="text-warning">
              Last Journey Details  -
              <br/><p className="text-info centerTxt">
              {data.data.startLocation+" - "+data.data.endLocation}</p><hr></hr>
              </div>
              <div className="text-warning">
              Card Validity Upto -
              <br/><p className="text-info centerTxt">
              {data.data.strValidUpto?data.data.strValidUpto:"Expired or Not found !"}</p><hr></hr>
              
              </div>
              <div className="text-warning">
              Card Last Used on  -
              <br/><p className="text-info centerTxt">
              {data.data.strLastUsedInGateOn?data.data.strLastUsedInGateOn+" at "+data.data.endLocation+" Gate":"Expired or Not found !"}</p>
              <br/><Alert severity="success">Balance and other details may vary . Please recheck with station!</Alert>
              </div>
              <br/>
              
            </div>
          )
          }</div>
        
        </div>
      )
      }
    </Container>
  );
}

export default App;
