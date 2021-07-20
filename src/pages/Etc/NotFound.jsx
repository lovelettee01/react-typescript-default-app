/* React */
import React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

/* NotFound Component */
const NotFound = (props) => {
  /* Props */
  const { className } = props;

  /* Renderer */
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <div className={className}>NotFound Page</div>
    </Container>
  );
};

/* NotFound Component Settings */
NotFound.propTypes = {
  className: PropTypes.string
};

/* Exports */
export default NotFound;
