import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import LabelBottomNavigation from '@components/LabelBottomNavigation';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0
  },
  grow: {
    flexGrow: 1
  }
}));
const BottomAppBar = (prpos) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <LabelBottomNavigation {...prpos} />
      </Toolbar>
    </AppBar>
  );
};
export default BottomAppBar;
