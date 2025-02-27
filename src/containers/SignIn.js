import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import IntlMessages from "util/IntlMessages";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignIn,
  userTwitterSignIn
} from "actions/Auth";

const SignIn = props => {
  const [email, setEmail] = useState("demo@example.com");
  const [password, setPassword] = useState("demo#123");
  const dispatch = useDispatch();
  const { loader, alertMessage, showMessage, authUser } = useSelector(
    ({ auth }) => auth
  );

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 100);
    }
    if (authUser !== null) {
      props.history.push("/");
    }
  }, [showMessage, authUser, props.history, dispatch]);

  return (
    <div className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      <div className="app-login-main-content">
        <div className="app-logo-content d-flex align-items-center justify-content-center">
          <Link className="logo-lg" to="/" title="Neighbor Connect">
            <img
              src={require("assets/images/logo.png")}
              alt="Neighbor Connect"
              title="Neighbor Connect"
            />
          </Link>
        </div>

        <div className="app-login-content">
          <div className="app-login-header mb-4">
            <h1>
              <IntlMessages id="appModule.email" />
            </h1>
          </div>

          <div className="app-login-form">
            <form>
              <fieldset>
                <TextField
                  label={<IntlMessages id="appModule.email" />}
                  fullWidth
                  onChange={event => setEmail(event.target.value)}
                  defaultValue={email}
                  margin="normal"
                  className="mt-1 my-sm-3"
                />
                <TextField
                  type="password"
                  label={<IntlMessages id="appModule.password" />}
                  fullWidth
                  onChange={event => setPassword(event.target.value)}
                  defaultValue={password}
                  margin="normal"
                  className="mt-1 my-sm-3"
                />

                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <Button
                    onClick={() => {
                      dispatch(showAuthLoader());
                      dispatch(userSignIn({ email, password }));
                    }}
                    variant="contained"
                    color="primary"
                  >
                    <IntlMessages id="appModule.signIn" />
                  </Button>

                  <Link to="/signup">
                    <IntlMessages id="signIn.signUp" />
                  </Link>
                </div>

                <div className="app-social-block my-1 my-sm-3">
                  <IntlMessages id="signIn.connectWith" />
                  <ul className="social-link">
                    <li>
                      <IconButton
                        className="icon"
                        onClick={() => {
                          dispatch(showAuthLoader());
                          dispatch(userFacebookSignIn());
                        }}
                      >
                        <i className="zmdi zmdi-facebook" />
                      </IconButton>
                    </li>

                    <li>
                      <IconButton
                        className="icon"
                        onClick={() => {
                          dispatch(showAuthLoader());
                          dispatch(userTwitterSignIn());
                        }}
                      >
                        <i className="zmdi zmdi-twitter" />
                      </IconButton>
                    </li>

                    <li>
                      <IconButton
                        className="icon"
                        onClick={() => {
                          dispatch(showAuthLoader());
                          dispatch(userGoogleSignIn());
                        }}
                      >
                        <i className="zmdi zmdi-google-plus" />
                      </IconButton>
                    </li>

                    <li>
                      <IconButton
                        className="icon"
                        onClick={() => {
                          dispatch(showAuthLoader());
                          dispatch(userGithubSignIn());
                        }}
                      >
                        <i className="zmdi zmdi-github" />
                      </IconButton>
                    </li>
                  </ul>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      {loader && (
        <div className="loader-view">
          <CircularProgress />
        </div>
      )}
      {showMessage && NotificationManager.error(alertMessage)}
      <NotificationContainer />
    </div>
  );
};

export default SignIn;
