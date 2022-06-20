import React from "react";
import Typography from "@material-ui/core/Typography";
import {useStylesExplicativeText } from "../styles/ExplicativeText";

export default function NavBar() {
  const classes = useStylesExplicativeText();

  return (
    <div>
      <Typography className={classes.pill}>
      💊
      </Typography>
      <Typography className={classes.reviewText}>
        Revisa tus compras
      </Typography>
      <Typography className={classes.cartText}>
        Agrega al carro si necesitas reponer
      </Typography>
      <div className={classes.titleDiv}>
        <Typography className={classes.text}>
          Te queda
        </Typography>
      </div>
    </div>
  );
}
