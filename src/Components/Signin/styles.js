import { createTheme, makeStyles } from "@material-ui/core";

export const customTheme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(",")
  }
});

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4)
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "-0.6em 0.6em 15px rgba(0, 0, 0, 0.25)",
    borderRadius: "1em",
    padding: theme.spacing(4)
  },
  avatar: {
    margin: theme.spacing(1)
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  rememberMe: {
    marginLeft: "-0.2em",
    marginTop: theme.spacing(1)
  },
  submit: {
    backgroundImage:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(65,57,60,1) 35%, rgba(204,25,74,1) 100%)",
    margin: theme.spacing(3, 0, 2)
  }
}));

export default useStyles;
