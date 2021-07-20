/* src/layouts/MainTemplate.js */

/* React */
import React from 'react';
import BottomAppBar from '@components/BottomAppBar';
import Container from '@material-ui/core/Container';

import PropTypes from 'prop-types';

const MainTemplate = (props) => {
  /* Props */
  const { className, children } = props;

  /* Renderer */
  return (
    <Container className={className} maxWidth="lg">
      {children}
      <BottomAppBar {...props} />
    </Container>
  );
};

/* Main Component Settings */
MainTemplate.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/* Exports */
export default MainTemplate;
