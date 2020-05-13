import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import {Grid, Box} from '@material-ui/core';
import FormSignup from './FormSignup';
import FormLogin from './FormLogin';
import Slide  from './Slide';
import Navbar from './Navbar';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { history } from '../helpers/history';

class Home extends Component {
    
    render() {
        return (
            <Container>
                <Grid xs={12}>
                    <Navbar />
                </Grid>   
                <Box>
                <Grid sm={12} container spacing={2}>
                    <Grid item sm={8} sc={12}>
                        <Slide />
                    </Grid>
                    <Grid item sm={3} sc={12}>
                        <Grid item sm={12} sc={12}>
                            <h2>Signup</h2>
                            <FormSignup />
                        </Grid>
                        <Grid item sm={12} sc={12}>
                            <h2>Login</h2> 
                            <FormLogin />
                        </Grid>
                    </Grid>
                </Grid>
                </Box>
            </Container>
        )
    }
}

export default Home;
