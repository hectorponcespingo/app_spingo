import React from 'react';

// * IMPORTS MATERIAL UI - APP BAR
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    SpinGo
                </Typography>

                <NavLink to="/register" className="navbar-item" > <Button color="inherit">Registro</Button></NavLink>
                <NavLink to="/login" className="navbar-item" > <Button color="inherit">Iniciar Sesión</Button></NavLink>
            </Toolbar>
            </AppBar>
      </Box>
    )
}
