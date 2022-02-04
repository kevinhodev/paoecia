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
import CheckBox from "@material-ui/core/Checkbox";

import { LockOutlined } from "@material-ui/icons";
import useStyles, { customTheme } from "./styles";
import Copyright from "../Copyright";
import { useState, useRef } from "react";
import FormValidator from "../../Utils/FormValidator";

const validator = new FormValidator();

const SignUp = () => {
  const classes = useStyles();
  const form = useRef();
  let input = null;

  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [checked, setChecked] = useState(false);
  const [formStatus, setFormStatus] = useState({});

  const handleChange = (event) => {
    input = event.target;
    setInputValues({
      ...inputValues,
      [input.name]: input.value.toLowerCase()
    });

    setChecked(input.checked);

    if (!validator.validate(input.name, input.value)) {
      setFormStatus(validator.getStatus());
    }
  };

  const handleBlur = (event) => {
    input = event.target;
    setInputValues({
      ...inputValues,
      [input.name]: input.value.toLowerCase()
    });

    if (!validator.validate(input.name, input.value)) {
      setFormStatus(validator.getStatus());
    }
  };

  const handleSubmit = (event) => {
    if (input) {
    } else {
      event.preventDefault();
      console.log("Preencha os campos corretemante");
    }

    //form.current.querySelector("input").focus();
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container component="main" maxWidth="xs" className={classes.container}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrar
          </Typography>
          <form
            ref={form}
            className={classes.form}
            onSubmit={handleSubmit}
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Nome"
              name="username"
              type="text"
              required
              autoFocus
              value={inputValues.username}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            <span className={classes.error}>{formStatus.username?.error}</span>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              required
              value={inputValues.email}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            <span className={classes.error}>{formStatus.email?.error}</span>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              value={inputValues.password}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            <span className={classes.error}>{formStatus.password?.error}</span>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirmar senha"
              type="password"
              id="confirmPassword"
              value={inputValues.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            <span className={classes.error}>
              {formStatus.confirmPassword?.error}
            </span>
            <FormControlLabel
              control={
                <CheckBox
                  checked={checked}
                  onChange={handleChange}
                  value="remember"
                  color="primary"
                />
              }
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
              Registrar
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  Já tem uma conta? Entrar
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

export default SignUp;
