/* src/layouts/MainTemplate.js */

/* React */
import React from 'react';
import Container from '@material-ui/core/Container';

import PropTypes from 'prop-types';
import { Header, Footer } from '~/layouts';

const MainTemplate = (props) => {
  /* Props */
  const { children, ...rest } = props;

  /* Renderer */
  return (
    <Container maxWidth="lg" style={{ height: '100%', padding: '0px' }}>
      <Header />
      {children}
      <Footer {...rest} />
    </Container>
  );
};

/* Main Component Settings */
MainTemplate.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

/* Exports */
export default MainTemplate;
