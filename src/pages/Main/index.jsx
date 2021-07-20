/* React */
import React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

/* Main Component */
const Main = (props) => {
  /* Props */
  const { className } = props;

  /* Renderer */
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={className}>Main Page</div>
    </Container>
  );
};

/* Main Component Settings */
Main.propTypes = {
  className: PropTypes.string
};

/* Exports */
export default Main;
