/* src/layouts/ErrorTemplate.js */

/* React */
import React from 'react';
import PropTypes from 'prop-types';

import BottomAppBar from '@components/BottomAppBar';
import Container from '@material-ui/core/Container';

const ErrorTemplate = (props) => {
  /* Props */
  const { className, children } = props;

  /* Renderer */
  return (
    <Container className={className} maxWidth="lg">
      {children}
      <BottomAppBar />
    </Container>
  );
};

/* Main Component Settings */
ErrorTemplate.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/* Exports */
export default ErrorTemplate;
