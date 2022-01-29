import { Link, Typography } from "@material-ui/core";
import React from "react";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textPrimary" align="center">
      {"Todos os direitos reservados "} &copy;{" "}
      <Link color="inherit" href="https://mui.com/">
        Kevin Ramos
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
