import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core";
import Grid from '@material-ui/core/Grid'

// use styles set up
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}))

export default function ProLinks(){
    // add use styles?
    const classes = useStyles();
    return (
       <div className={classes.root}>
           <Grid direction='row' justify='center' alignItems='center'>
               Link
           </Grid>
       </div>
    )

}
