import React from 'react';
import { useEffect, useState,useRef } from 'react';
import {PaymentOutlined} from '@material-ui/icons'
import {Button,TextField,Container,AppBar,Typography,Toolbar, IconButton, BottomNavigation,BottomNavigationAction, makeStyles} from '@material-ui/core';
export default function Header(){

    return(

        <AppBar position="static">
                <Toolbar>
                <IconButton edge="start"><PaymentOutlined/></IconButton>
                <Typography variant="h6">
                Kolkata Metro Card 
                </Typography>
                </Toolbar>
        </AppBar>
    )}