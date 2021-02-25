import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';
import SideNav from "../SideNav";
import './style.css'


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
    heading: {
        textAlign: 'center',
        fontFamily: 'Cormorant Garamond, serif',
        fontWeight: 500,
        fontSize: '2.5rem'
    }

}));


export default function Header() {
    const classes = useStyles();
    // header build with side drawer trigger
    return (
        <header position="fixed" className={`${classes.root} ${classes.fixed} gradient`} p={2}>
            <Grid container direction='row' justify='center' alignItems='center' p={2}>
                <Grid xs >
                    <SideNav />
                </Grid>
                <Grid xs={10} >
                    <Typography variant='h1' className={classes.heading} align='center'>
                        Bobbi Tarkany
                    </Typography>
                </Grid>
                <Grid xs></Grid>
            </Grid>
        </header>
    )
}
