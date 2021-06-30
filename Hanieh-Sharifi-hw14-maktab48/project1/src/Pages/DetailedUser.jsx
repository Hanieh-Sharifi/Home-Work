import React from 'react';
import FetchData from '../HOC/FetchData';
import DetailedPageHeader from '../Components/DetailedPageComponents/DetailedPageHeader';
import { Grid } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import { useState } from 'react';
import DetailedPageAddress from "../Components/DetailedPageComponents/DetailedPageAddress";
import DetailedPageContact from "../Components/DetailedPageComponents/DetailedPageContact";

const useStyles = makeStyles((theme)=>({
    container:{
        backgroundColor:"gray",
    },
    button:{
        width:"100%"
    }
}))


function DetailedUser({idData})
{
    const classes = useStyles();
    const [display, setDisplay] = useState(true);

    return (
        <div>
            <DetailedPageHeader idData={idData}/>
            <Container className={classes.container}>
                <Grid container item direction="row" lg alignItems="center" justify="center">
                    <Grid item xs={12} md={6}>
                        <Button onClick={() => setDisplay(false)} className={classes.button}>
                            <HomeIcon/>
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button onClick={() => setDisplay(true)} className={classes.button}>
                            <ContactPhoneIcon/>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            {display? <DetailedPageContact idData={idData}/> : <DetailedPageAddress idData={idData}/>}
        </div>
    )
}

export default FetchData(DetailedUser,"https://60b4f1a0fe923b0017c8335b.mockapi.io/contacts");
