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


// create style classes
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    fixed: {
        top: 0,
        bottom: auto
    }

}));

// temporary drawer state
export default function TemporaryDrawer() {
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



export default function Header({ onClick }) {
    const classes = useStyles();
    // header build with side drawer trigger
    return (
        <header position="fixed" className={`${classes.root} ${classes.fixed}`}>
            <Grid container direction='row' justify='center' alignItems='center'>
                <Grid xs >

                </Grid>
                <Grid xs={10}>
                    <Typography variant="h1" component="h2">
                        Bobbi Tarkany
                    </Typography>
                </Grid>
                <Grid xs></Grid>
            </Grid>
        </header>
    )
}
