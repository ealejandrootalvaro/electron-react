import { Link } from 'react-router-dom'
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { MenuItem } from '@material-ui/core';

const Header = () => (

    <div>
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit">
                    <MenuItem component={Link} to={"/"} >Home</MenuItem>
                </Button>
                <Button color="inherit">
                    <MenuItem component={Link} to={"/tasks"} >Tasks</MenuItem>
                </Button>
            </Toolbar>
        </AppBar>
    </div>
)

export default Header;