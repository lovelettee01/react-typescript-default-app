/* src/routes/RouteWithLayout.jsx */

/* React */
import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithLayout = ({ layout: Layout, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(prpos) => (
        <Layout {...prpos}>
          <Component />
        </Layout>
      )}
    />
  );
};

/* Exports */
export default RouteWithLayout;
