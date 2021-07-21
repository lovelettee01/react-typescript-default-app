import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: '100%'
  }
});

const LabelBottomNavigation = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.match.path);

  const handleChange = (e, val) => {
    setValue(val);
    props.history.push(val);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} showLabels className={classes.root}>
      <BottomNavigationAction label="Board" value="/Board" icon={<RestoreIcon />} />
      <BottomNavigationAction label="SignUp" value="/SignUp" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="SignIn" value="/SignIn" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export default LabelBottomNavigation;
