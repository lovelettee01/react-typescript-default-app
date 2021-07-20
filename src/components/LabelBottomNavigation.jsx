import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const LabelBottomNavigation = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    console.log('newValue[' + newValue + ']');
    setValue(newValue);
    props.history.push('/SignUp');
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Recents" value="1" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" value="2" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" value="3" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export default LabelBottomNavigation;
