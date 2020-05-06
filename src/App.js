import React from "react";
import { Router, Route } from "react-router";
import { ThemeProvider } from "styled-components";
import {
  StylesProvider,
  MuiThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import { history } from "./config";
import { theme } from "./styles/theme";

const Auth = React.lazy(() => import("./components/AuthWrapper/AuthWrapper"));
const Login = React.lazy(() => import("./modules/Login"));

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <React.Suspense fallback={null}>
            <Auth>
              <Router history={history}>
                <Route
                  exact
                  path="/login"
                  name="Login Page"
                  render={(props) => <Login {...props} />}
                />
              </Router>
            </Auth>
          </React.Suspense>
        </ThemeProvider>
      </StylesProvider>
    </MuiThemeProvider>
  );
}

export default App;
