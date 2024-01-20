import React from "react";
import { Grid, Typography } from "@mui/material";

export default function Bio() {
  return (
    <Grid container spacing={3} p={4}>
      <Grid item xs={12} sm={8}>
        <Typography variant="h1" gutterBottom className="merienda">
          About
        </Typography>
        <Typography paragraph gutterBottom sx={{ mb: 2 }} className="cormorant">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi expedita
          libero laboriosam dolores consequuntur odio optio eius sequi unde
          maiores dolore, rem harum odit accusantium aperiam vitae natus tenetur
          nesciunt.
        </Typography>

        <Typography
          paragraph
          gutterBottom
          sx={{ mb: 2 }}
          className="cormorantg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi expedita
          libero laboriosam dolores consequuntur odio optio eius sequi unde
          maiores dolore, rem harum odit accusantium aperiam vitae natus tenetur
          nesciunt.
        </Typography>

        <Typography
          paragraph
          gutterBottom
          sx={{ mb: 2 }}
          className="montserrat"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi expedita
          libero laboriosam dolores consequuntur odio optio eius sequi unde
          maiores dolore, rem harum odit accusantium aperiam vitae natus tenetur
          nesciunt.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <img src="./assets/me.jpg" />
      </Grid>
    </Grid>
  );
}
