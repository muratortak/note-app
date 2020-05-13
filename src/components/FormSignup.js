import React, {useState, setState, useReducer } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

//#region useReducer
const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function reducer(state, {field, value}) {
    return {
        ...state,
        [field]: value
    }
}
//#endregion useReducer

function FormSignup() {

    //#region useReducer
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const handleChange = (event) =>{
        dispatch({field: event.target.name, value: event.target.value})    
    }
    //#endregion useReducer

    //#region useReducer
    const {name, email, password, confirmPassword} = state;
    //#endregion useReducer

        return (
            <form noValidate autoComplete="off">
                <FormControl>
                    <InputLabel htmlFor="component-simple">Name</InputLabel>
                    <Input id="component-simple" type="text" name="name" value={name} onChange={handleChange}></Input>
                </FormControl>
                <br />
                <FormControl>
                    <InputLabel htmlFor="component-simple">Email</InputLabel>
                    <Input id="component-simple" type="text" name="email" value={email} onChange={handleChange}></Input>
                </FormControl>
                <br />
                <FormControl>
                    <InputLabel htmlFor="component-simple">Password</InputLabel>
                    <Input id="component-simple" type="password" name="password" value={password} onChange={handleChange}></Input>
                </FormControl>
                <br />
                <FormControl>
                    <InputLabel htmlFor="component-simple">Confirm Password</InputLabel>
                    <Input id="component-simple" type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange}></Input>
                </FormControl>
                <br />
            </form>
        )
}

export default FormSignup;