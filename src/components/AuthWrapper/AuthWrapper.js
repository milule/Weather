import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useTitle } from "react-use";
import { LoadingWrapper } from "../index";
import { userService } from "../../services";
import {
  checkToken,
  getToken,
  setContext,
  useAuth,
  useGlobal,
  useCancelToken,
} from "../../utils";

const S = {};

S.Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

function AuthWrapper({ children }) {
  const [isNext, setIsNext] = useState(false);
  const { setLoading, loading } = useGlobal();
  const { login, logout, initToken } = useAuth();

  const meToken = useCancelToken();
  const isLoading = useMemo(() => loading[userService.effect.me], [loading]);

  useTitle("My Weather");

  useEffect(() => {
    async function fetchMe() {
      const rs = await userService.me(meToken);

      if (!rs.error && rs.data) {
        login(rs.data);
        initToken(getToken());
      }
    }

    // init context
    setContext({ loading: setLoading, logout: logout });

    // check authentication
    if (checkToken()) {
      fetchMe();
    } else {
      logout();
    }

    setIsNext(true);
  }, []);

  return isNext && !isLoading ? (
    <>{children}</>
  ) : (
    <S.Container>
      <LoadingWrapper loading={true} />
    </S.Container>
  );
}

AuthWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

AuthWrapper.defaultProps = {
  children: null,
};

export default AuthWrapper;
