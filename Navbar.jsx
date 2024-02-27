import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: "50px", // Adjust height as needed for your logo
    marginRight: theme.spacing(2),
  },
  appBar: {
    backgroundColor: "#404040", // Background color set to #404040
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img src="src\assets\School_logo.png" alt="School Logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            Welcome to Aaradhya School Bus Services
          </Typography>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Services</Button>
          {/* Add more buttons/links as needed */}
        </Toolbar>
      </AppBar>
      {/* Add padding to the top of the content to prevent it from being hidden under the fixed navbar */}
      <Toolbar />
      {/* Content goes here */}
    </div>
  );
}

export default Navbar;
