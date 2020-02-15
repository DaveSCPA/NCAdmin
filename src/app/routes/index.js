import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import asyncComponent from "../../util/asyncComponent";

const Routes = ({ match }) => (
  <Switch>
    <Route
      path={`${match.url}/sample-page`}
      component={asyncComponent(() => import("./SamplePage"))}
    />
    <Route
      path={`${match.url}/volunteer-page`}
      component={asyncComponent(() => import("./VolunteerPage"))}
    />
    <Route
      path={`${match.url}/volunteer-input-page`}
      component={asyncComponent(() =>
        import("./VolunteerPage/VolunteerInputPage")
      )}
    />
    <Route
      path={`${match.url}/job-page`}
      component={asyncComponent(() => import("./JobsPage"))}
    />
    <Route
      path={`${match.url}/jobs-add-new-page`}
      component={asyncComponent(() => import("./JobsPage/JobsAddNewPage"))}
    />
    {/*<Route component={asyncComponent(() => import("app/routes/extraPages/routes/404"))}/>*/}
  </Switch>
);

export default withRouter(Routes);
