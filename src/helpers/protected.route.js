import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import cookie from 'js-cookie';

export const ProtectedRoute = ({compoenent: Component, ...rest}) => {
    return (
        <Route {...rest} render= {
            (props) => {
                console.log("PROPS IN PROTECTED: ", props.user.token);
                if(props.user.token.length > 0) {
                    return <Component {...props}/>
                }
                else 
                {
                    return <Redirect to={{
                        pathname: "/",
                        state: {
                            from: props.location
                        }
                    }} />
                }
            }
        } />
    )
}
