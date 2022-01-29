import {
  Avatar,
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography
} from "@material-ui/core";
import { CheckBox, LockOutlined } from "@material-ui/icons";
import useStyles, { customTheme } from "./styles";
import Copyright from "../Copyright";

import { useState, useRef } from "react";

const SignIn = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    if (event.target.id === "email") {
      setEmail(event.target.value.toLowerCase());
    } else if (event.target.id === "password") {
      setPassword(event.target.value.toLowerCase());
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formElement = event.target;

    const data = Object.fromEntries(new FormData(formElement));
    console.log(formElement);

    setEmail("");
    setPassword("");
    formElement.querySelector("input").focus();
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container component="main" maxWidth="xs" className={classes.container}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleChange}
            ></TextField>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handleChange}
            ></TextField>
            <FormControlLabel
              control={<CheckBox value="remember" color="primary" />}
              label="Me lembrar"
              className={classes.rememberMe}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Não tem uma conta? Registrar
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
