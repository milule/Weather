import React, { Suspense, memo, useMemo } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import styled from "styled-components";
import { Container } from "reactstrap";
import { routes, navigation } from "../config";
import { useSocket } from "../utils";
import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav
} from "@coreui/react";

const AppContainer = styled(Container)`
  width: 100%;
  height: calc(100vh - 149px);
  overflow: hidden;
  padding: 15px !important;
`;

const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

const DefaultLayout = memo(props => {
  // const [socket] = useSocket();

  const loading = useMemo(
    () => <div className="animated fadeIn pt-1 text-center">Loading...</div>,
    []
  );

  return (
    <div className="app">
      <AppHeader fixed>
        <Suspense fallback={loading}>
          <DefaultHeader />
        </Suspense>
      </AppHeader>
      <div className="app-body">
        <AppSidebar fixed display="lg">
          <Suspense>
            <AppSidebarNav navConfig={navigation} {...props} router={router} />
          </Suspense>
          <AppSidebarMinimizer />
        </AppSidebar>
        <main className="main">
          <AppBreadcrumb appRoutes={routes} router={router} />
          <AppContainer fluid>
            <Suspense fallback={loading}>
              <Switch>
                {routes.map((route, idx) =>
                  route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => (
                        <route.component {...props} {...route.props} />
                      )}
                    />
                  ) : null
                )}
                <Redirect from="/" to="/dd-pc" />
              </Switch>
            </Suspense>
          </AppContainer>
        </main>
      </div>
      <AppFooter>
        <Suspense fallback={loading}>
          <DefaultFooter />
        </Suspense>
      </AppFooter>
    </div>
  );
});

export default DefaultLayout;
