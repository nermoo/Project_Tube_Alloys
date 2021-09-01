import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles=makeStyles({

    footer:{
        marginTop: 1,
        padding: 1,
        backgroundColor: '#00897b',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height:50
    }
})

const Footer=()=>{
    const classes=useStyles();

    return(
        <div className={classes.footer}>
<p>aravinda kolitha nawarathna</p>
        </div>
    );
}

export default Footer;