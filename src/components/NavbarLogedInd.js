import React from 'react'
import Grid from '@material-ui/core/Grid';
//Mui imports
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

export default function NavbarLogedInd() {
    return (
        <div>
            <AppBar style={{position: 'relative'}}>
                <ToolBar>
                <Button 
                        component={Link}
                        to="/">Home</Button>
                    <Button 
                        component={Link}
                        to="/main">Main</Button>
                    <Button 
                        component={Link}
                        to="/settings">Settings</Button>
                </ToolBar>
            </AppBar>  
        </div>
    )
}
