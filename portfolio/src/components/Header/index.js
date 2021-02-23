import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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


export default function Header({ onClick }) {
    const classes = useStyles();
    // header build with side drawer trigger
    return (
        <header position="fixed" className={`${classes.root} ${classes.fixed}`}>
            <Grid container direction='row' justify='center' alignItems='center'>
                <Grid ></Grid>
            </Grid>
        </header>
    )
}
