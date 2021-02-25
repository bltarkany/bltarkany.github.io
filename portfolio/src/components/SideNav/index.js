import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Link from 'react-router-dom'; 


// temporary drawer state
export default function SideNav() {
    // classes for direction of the drawer
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    // toggle the drawer
    const toggleDrawer = (anchor, open) => (event) => {
        // handling edge cases
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    // nav list items with 
    const list = (anchor) => (
        <div className={ } role='presentation' onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>

        </div>
    )
}