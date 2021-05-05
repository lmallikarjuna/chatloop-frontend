import { useState } from "react";
import {
  Grid,
  Container,
  TextField,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  subtitles: {
    marginTop: 5,
    marginBottom: 5,
    display: "block",
  },
});

const ForgetPassword = () => {
  const classes = useStyles();
  const [email, setemail] = useState("");
  const [emailError, setemailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setemailError(false);

    if (email === "") {
      setemailError(true);
    }

    if (email) {
      console.log(email);
    }
  };

  return (
    <div className="mobile_login_container">
      <Container disableGutters style={{ margin: "0", height: "100vh" }}>
        <Grid
          align="center"
          justify="center"
          direction="column"
          container
          item
          xs={12}
          sm={12}
          style={{
            height: "100%",
            width: "100%",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            textAlign: "left",
            padding: "20px",
            backgroundColor: "white",
          }}
        >
          <Typography variant="h5" color="primary">
            Reset Password
          </Typography>
          <Typography
            color="secondary"
            variant="subtitle2"
            gutterBottom
            align="left"
            className={classes.subtitles}
          >
            Enter the email address associated with your account
          </Typography>
          <form noValidate autoComplete="false" onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              required
              fullWidth
              className={classes.field}
              type="text"
              error={emailError}
              onChange={(e) => setemail(e.target.value)}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disableElevation
            >
              Send Code
            </Button>
          </form>
          <Typography
            variant="subtitle2"
            gutterBottom
            align="left"
            className={classes.subtitles}
          >
            Try signing in again?{" "}
            <Link to="/signin">
              <span style={{ color: "#5E5470" }} className="cursor-pointer">
                {" "}
                Sign In{" "}
              </span>
            </Link>
          </Typography>
        </Grid>
      </Container>
    </div>
  );
};

export default ForgetPassword;
