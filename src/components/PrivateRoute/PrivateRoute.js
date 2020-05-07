import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth ? (
          // authenticate failed so redirect login
          <Redirect to="/login" />
        ) : (
          // authenticate success so return component
          <Component {...props} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  pathname: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

PrivateRoute.defaultProps = {
  pathname: "/",
  children: null,
};

export default PrivateRoute;
