import React, { Component } from 'react';
import NavbarLogedInd from './NavbarLogedInd';
import Grid from '@material-ui/core/Grid';
import UserProfile from './UserProfile';
import Notes from './Notes';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        // if(localStorage['user']) delete localStorage['user'];
        // let tokenExists = localStorage['user'];
        // console.log("TOKEN EXISTS: ", tokenExists);
        console.log("PROPS IN MAIN: ", this.props.user);
        if(!this.props.user.token) {
            console.log("PROPS TOKEN IN EMPTY");
            return <Redirect to="/" />
        }
        // console.log('localstorage ', tokenExists);
        return (
            <Grid>
                <NavbarLogedInd />
                <Grid container sm={12}>
                    <Grid item sm={3}>
                        <UserProfile />
                    </Grid>
                    <Grid item sm={8}>
                        <Notes />
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        loading: state.user.loading,
        hasErrors: state.user.hasErrors
    }
}

export default connect(mapStateToProps)(Main)
