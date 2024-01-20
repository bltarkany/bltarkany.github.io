import React from "react";
import FontCard from "../blocks/cards/fontCard";
import Grid from "@mui/material/Grid";

export default function FonTTest() {
  const fonts = [
    "arima",
    "instrument",
    "kaushan",
    "merienda",
    "shadows",
    "zeyada",
  ];

  const base = ["cormorantg", "montserrat", "cormorant"];

  const corClasses = fonts.map((font) => ({ base: base[2], highlight: font }));

  const corgClasses = fonts.map((font) => ({ base: base[0], highlight: font }));

  const montClasses = fonts.map((font) => ({ base: base[1], highlight: font }));

  return (
    <Grid container spacing={2}>
      {corClasses.map((font, i) => (
        <Grid item xs={4}>
          <FontCard
            base={font.base}
            highlight={font.highlight}
            key={`${font.base}-i`}
          />
        </Grid>
      ))}
      {corgClasses.map((font, i) => (
        <Grid item xs={4}>
          <FontCard
            base={font.base}
            highlight={font.highlight}
            key={`${font.base}-i`}
          />
        </Grid>
      ))}
      {montClasses.map((font, i) => (
        <Grid item xs={4}>
          <FontCard
            base={font.base}
            highlight={font.highlight}
            key={`${font.base}-i`}
          />
        </Grid>
      ))}
    </Grid>
  );
}
