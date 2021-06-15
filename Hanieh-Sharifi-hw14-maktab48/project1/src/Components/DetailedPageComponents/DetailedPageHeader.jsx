import React from 'react';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Forms from "./Forms";
import TextField from '@material-ui/icons/TextFields';
import { Box, FormControl, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    media:{
        width:"250px",
        height: "250px",
        borderRadius:"50%",
        objectFit:"contain",
        margin:"auto"
    },
    headerParent:{
        marginTop:"50px",
        marginBottom:"50px",
    },
    inputsParent:{
        margin:"auto"
    },
    form:{
        margin:"auto",
        width:"100%"
    }
}))




function DetailedPageHeader({idData}) {

    const classes = useStyles();

    return (
        <Grid container item direction="row" className={classes.headerParent}>
            <Grid justify="center" alignItems="center" xs={12} md={4} >
                <CardMedia
                    className={classes.media}
                    image={idData.avatar}
                    title="avatar"
                />
            </Grid>
            <Grid className={classes.form} container item xs={12} md={8}>
                <Forms idData={idData}/>
            </Grid>
        </Grid>
    )
}

export default DetailedPageHeader
