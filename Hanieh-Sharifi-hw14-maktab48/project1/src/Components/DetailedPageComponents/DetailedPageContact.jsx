import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        marginBottom:"20px"
      },
      display:"flex",
      justifyContent:"center",
      flexWrap:"wrap",
      marginTop:"30px",
      marginBottom:"30px",
    },
  }));

function DetailedPageContact({idData}) {

    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Grid>
                <TextField id="outlined-basic" InputProps={{readOnly: true}} value={idData.phone} label="Phone Number" variant="outlined" />
            </Grid>
            <Grid>
                <TextField id="outlined-basic" InputProps={{readOnly: true}} value={idData.email} label="Email" variant="outlined" />
            </Grid>
        </form>
    )
}

export default DetailedPageContact
