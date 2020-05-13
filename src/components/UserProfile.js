import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { logout } from '../actions/user.actions';

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.props.dispatch(logout());
    }

    render() {
        return (
            <Grid>
                <Grid>
                    {/* {TODO: Must figure out why .user. needed} */}
                   {this.props.user.userName}
                   <br />
                   {this.props.user.email}
                   <br />
                   {this.props.user.type}
                   <button onClick={this.handleClick}>logout</button>
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

export default connect(mapStateToProps)(UserProfile)
