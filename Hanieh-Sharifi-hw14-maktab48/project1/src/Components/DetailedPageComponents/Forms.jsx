import React,{ useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useEffect } from 'react';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    display:"flex",
    justifyContent:"center",
    flexWrap:"wrap",
    marginTop:"30px"
  },
}));

function Forms({idData})
{
  const classes = useStyles();
  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus()
  },[])
  
  return(
        <form className={classes.root} noValidate autoComplete="off">
          <TextField ref={inputRef} id="outlined-basic" InputProps={{readOnly: true}} value={idData.company} label="Company" variant="outlined" autoFocus={true} />
          <TextField id="outlined-basic" InputProps={{readOnly: true}} value={idData.code} label="Code" variant="outlined" />
          <TextField id="outlined-basic" InputProps={{readOnly: true}} value={idData.job} label="Job" variant="outlined" />
          <TextField id="outlined-basic" InputProps={{readOnly: true}} value={idData.firstName} label="First Name" variant="outlined" />
          <TextField id="outlined-basic" InputProps={{readOnly: true}} value={idData.lastName} label="Last Name" variant="outlined" />
        </form>

  );
}

export default Forms;