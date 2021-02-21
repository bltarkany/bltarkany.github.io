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
import { Link } from 'react-router-dom';
import ProLinks from "../ProLinks";


// create style classes
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    fixed: {
        top: 0,
        bottom: 'auto',
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    button: {
        textAlign: 'center',
        fontFamily: 'Cormorant Garamond, serif',
        // fontWeight: 500,
        fontSize: '2rem',
        color: '#87A3A3'
    }

}));

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
        <div role='presentation' onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
            <List>
                <ListItem>
                    <Link to='/'>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to='/about'>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText>Bio</ListItemText>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to='/portfolio'>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText>Projects</ListItemText>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to='/contact'>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText>Contact</ListItemText>
                    </Link>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem>
                    <ProLinks />
                </ListItem>
            </List>
        </div>
    );



    return (
        <>
            {/* <Button onClick={toggleDrawer(anchor, true)}><i class="fad fa-ellipsis-h"></i></Button> */}
            <Button className={classes.button} ><i class="fas fa-ellipsis-v-alt"></i></Button>
        </>
    )

}