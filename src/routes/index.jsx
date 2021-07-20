import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteWithLayout from '@routes/RouteWithLayout';
import { MainTemplate, ErrorTemplate } from '~/layouts';
import { Main, SignUp, SignInSide, NotFound } from '~/pages';

const MainRotute = () => (
  <Router>
    <Switch>
      <RouteWithLayout
        path="/"
        exact
        layout={(props) => <MainTemplate {...props} sectionId="Main" />}
        component={Main}
      />
      <RouteWithLayout
        path="/Board"
        exact
        layout={(props) => <MainTemplate {...props} sectionId="Main" />}
        component={Main}
      />
      <RouteWithLayout
        path="/SignIn"
        exact
        layout={(props) => <MainTemplate {...props} sectionId="Main" />}
        component={SignInSide}
      />
      <RouteWithLayout
        path="/SignUp"
        exact
        layout={(props) => <MainTemplate {...props} sectionId="Main" />}
        component={SignUp}
      />
      <RouteWithLayout
        path="*"
        layout={(props) => <ErrorTemplate {...props} sectionId="error" />}
        component={NotFound}
      />
    </Switch>
  </Router>
);

export default MainRotute;
