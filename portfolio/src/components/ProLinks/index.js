import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

// use styles set up
const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    icons: {
        color: '#FF3E41'
    }
}))

export default function ProLinks() {
    // add use styles?
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <Typography className={`${classes.root} ${classes.icons}`} underline='none'>
            <Link href="https://www.linkedin.com/in/bobbi-tarkany/" onClick={preventDefault}>
                <i class="fab fa-linkedin"></i>
            </Link>
            <Link href="https://github.com/bltarkany" onClick={preventDefault} color="inherit">
                <i class="fab fa-github-square"></i>
            </Link>
            <Link href="https://drive.google.com/file/d/1ttonDuFayhPhww-ePVTzQWryl0ayu1Y3/view?usp=sharing" onClick={preventDefault} variant="body2">
                <i class="fad fa-file-user"></i>
            </Link>
        </Typography>
    )

}
