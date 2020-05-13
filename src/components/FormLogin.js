import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Redirect from 'react-router-dom/Redirect';
import { loginFunc } from '../actions/user.actions';


//#region useReducer
const initialState = {
    email: '',
    password: ''
}

function reducer(state, {field, value}) {
    return {
        ...state,
        [field]: value
    }
}
//#endregion useReducer

function FormLogin({dispatch, user, loading, hasErrors}) {

    //#region useReducer
    const [credentialState, dispatchIn] = useReducer(reducer, initialState);
    
    const handleChange = (event) => {
        dispatchIn({field: event.target.name, value: event.target.value})    
    }
    
    //#endregion useReducer

    //#region useReducer
    const {userName, password} = credentialState;
    //#endregion useReducer


    const submitForm = async (event) => {
        event.preventDefault();
        dispatch(await loginFunc({userName, password}));
    }

    return (
        <form onSubmit={submitForm} noValidate autoComplete="off">
        <FormControl>
            <InputLabel htmlFor="component-simple">Email</InputLabel>
            <Input id="component-simple" type="text" name="userName" value={userName} onChange={handleChange}></Input>
        </FormControl>
        <br />
        <FormControl>
            <InputLabel htmlFor="component-simple">Password</InputLabel>
            <Input id="component-simple" type="password" name="password" value={password} onChange={handleChange}></Input>
        </FormControl>
        <br />
        <FormControl>
            <Button type="submit">Login</Button>
        </FormControl>
        <FormControl>
        <br />
        <div className="loading">
            {
                loading &&
                <img width="100" src='https://media.giphy.com/media/iJOZwC1R7WVxAxs4Gs/giphy.gif' alt="" />
            }
        </div>
        </FormControl>
            
    </form>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        loading: state.user.loading,
        hasErrors: state.user.hasErrors
    }
}

export default connect(mapStateToProps)(FormLogin);