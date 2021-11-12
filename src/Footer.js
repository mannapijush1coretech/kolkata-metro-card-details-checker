import React from 'react';
import { useEffect, useState,useRef } from 'react';
import {Mood,WhatsApp} from '@material-ui/icons'
import {Button,TextField,Container,AppBar,Typography,Toolbar, IconButton, BottomNavigation,BottomNavigationAction,makeStyles,Chip,Avatar, Fab} from '@material-ui/core';

export default function Footer(){
    const waSend={
        message:`
        https://metro-card-checker.vercel.app
        Kolkata Metro Card Utility - *Check Metro Card Balance*,
        Validity, 
        Last Recharged Details, 
        *Last Travel Details*`,
        title:'Kolkata Metro Card Utility',
        url:'https://metro-card-checker.vercel.app'
      };
    const sendWaBtn=async()=>{
        shareTextToWhatsApp(waSend.message);
    }
    const styles=makeStyles((theme)=>({
        stickToBottom:{
            width: '100%',
            position: 'fixed',
            bottom: 0,
        },
        flexBi:{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            '& > *': {
            margin: theme.spacing(1.5),
            },
        },
        fab:{
            position:'fixed',
            bottom:theme.spacing(7.5),
            right:theme.spacing(0.5),
            
          },
          extendIcn:{
            
          }
    }))
    const classes=styles();
    return(
    <div>
        <Fab onClick={sendWaBtn}className={classes.fab} color="primary" aria-label="whatsapp share"><WhatsApp/></Fab>
        <BottomNavigation className={classes.stickToBottom} showLabels>
            <div className={classes.flexBi}>
                <Chip variant="outlined" label="Pijush - 2021"avatar={<Avatar src="" />}/> 
            </div>
        </BottomNavigation>
    </div>
    )
}