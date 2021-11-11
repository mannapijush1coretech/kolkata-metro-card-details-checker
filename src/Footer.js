import React from 'react';
import { useEffect, useState,useRef } from 'react';
import {Mood} from '@material-ui/icons'
import {Button,TextField,Container,AppBar,Typography,Toolbar, IconButton, BottomNavigation,BottomNavigationAction,makeStyles,Chip,Avatar} from '@material-ui/core';

export default function Footer(){
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
        }
    }))
    const classes=styles();
    return(
<BottomNavigation className={classes.stickToBottom} showLabels>
    <div className={classes.flexBi}>
        <Chip variant="outlined" label="Pijush © 2021"avatar={<Avatar src="./1.jpg" />}/> 
    </div>
</BottomNavigation>
    )
}