import React from 'react';
import { useEffect, useState,useRef } from 'react';
import {PaymentOutlined, Help} from '@material-ui/icons'
import {Button,TextField,Container,AppBar,Typography,Toolbar, IconButton,Chip, BottomNavigation,BottomNavigationAction, makeStyles,Modal,Backdrop,Fade} from '@material-ui/core';
import { Avatar } from 'material-ui';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(0.5),
    },
    title: {
      flexGrow: 1,
    },
    iconB:{
        right:theme.spacing(-2.5)
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        //border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 4, 2),
      },
  }));
export default function Header(){
    const classes = useStyles();

    const [open,setOpen]=useState(false);

    const handleOpen=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    return(
        <div className={classes.root}>
            <AppBar position="static">
                    <Toolbar>
                    <IconButton className={classes.menuButton} classedge="start"><PaymentOutlined/></IconButton>
                    <Typography variant="h6" className={classes.title}>
                    Kolkata Metro Card
                    </Typography>
                    <Button onClick={handleOpen}className={classes.iconB} color="inherit"><Help/></Button>
                    </Toolbar>
            </AppBar>
            <Modal
                aria-labelledby="About Author"
                aria-describedby="Author"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                    
                        <h3 id="transition-modal-title">About Me</h3>
                        
                        <p id="transition-modal-description">
                        
                            Author - Pijush Manna 
                            <br/>Year - 2021
                            <br/>Released Under GNU V3
                            <br/>My source code can be found on <a href="https://github.com/mannapijush1coretech/kolkata-metro-card-details-checker">GitHub</a>

                        </p>
                    </div>
                </Fade>
            </Modal>
        </div>
    )}