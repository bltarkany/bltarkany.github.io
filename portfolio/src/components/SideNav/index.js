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
    list: {
        width: 250,
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
    },
    navColor: {
        backgroundColor: 'fffcff',
    },
    icons: {
        color: '#FF3E41',
        fontSize: '2rem'
    },
    routes: {
        textDecoration: 'none',
        fontFamily: 'Cormorant Garamond, serif',
        fontWeight: 500,
        fontSize: '1.8rem',
        color: 'black'
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
        <div className={classes.list} role='presentation' onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
            <List className={classes.navColor}>
                <ListItem>
                    <ListItemIcon className={classes.icons}><i class="fal fa-home"></i></ListItemIcon>
                    <ListItemText><Link className={classes.routes} to='/'>Home</Link></ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon className={classes.icons}><i class="fal fa-stars"></i></ListItemIcon>
                    <ListItemText><Link className={classes.routes} to='/about'>Bio</Link></ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon className={classes.icons}><i class="fal fa-code-branch"></i></ListItemIcon>
                    <ListItemText><Link className={classes.routes} to='/portfolio'>Projects</Link></ListItemText>                   
                </ListItem>
                <ListItem>
                    <ListItemIcon className={classes.icons}><i class="fal fa-address-book"></i></ListItemIcon>
                    <ListItemText><Link className={classes.routes} to='/contact'>Contact</Link></ListItemText>                   
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <ProLinks />
                </ListItem>
            </List>
        </div>
    );



    return (
        <div>
            <Button className={classes.button} onClick={toggleDrawer('left', true)}><i class="fas fa-ellipsis-v-alt"></i></Button>
            {/* <Button className={classes.button} ><i class="fas fa-ellipsis-v-alt"></i></Button> */}
            <Drawer className={classes.navColor} anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                {list('left')}
            </Drawer>
        </div>
    )

}