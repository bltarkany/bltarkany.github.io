import React from "react";
import { Grid, Typography } from "@mui/material";

export default function ErrorPage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="hi" className="">
          Whoops! looks like something is missing
        </Typography>
      </Grid>
    </Grid>
  );
}
