import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  StylesProvider,
  MuiThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import { theme } from "./styles/theme";

const Private = React.lazy(() =>
  import("./components/PrivateRoute/PrivateRoute")
);
const Auth = React.lazy(() => import("./components/AuthWrapper/AuthWrapper"));
const Login = React.lazy(() => import("./modules/Login"));
const Dashboard = React.lazy(() => import("./modules/Dashboard"));

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <React.Suspense fallback={null}>
            <Auth>
              <Switch>
                <Route
                  exact
                  path="/login"
                  name="Login Page"
                  render={(props) => <Login {...props} />}
                />
                <Private pathname="/" component={Dashboard} />
                <Redirect to="/" />
              </Switch>
            </Auth>
          </React.Suspense>
        </ThemeProvider>
      </StylesProvider>
    </MuiThemeProvider>
  );
}

export default App;
