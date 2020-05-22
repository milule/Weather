import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useMount } from "react-use";
import { userService } from "../../services";
import { LoadingWrapper } from "../index";
import {
  checkToken,
  getToken,
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
  const { login, logout, initToken } = useAuth();
  const { loading } = useGlobal();

  const meToken = useCancelToken();
  const isLoading = useMemo(() => loading[userService.effect.me], [loading]);

  useMount(async () => {
    async function fetchMe() {
      const rs = await userService.me(meToken);

      if (rs.error || !rs.data) {
        logout();
        return;
      }

      login(rs.data);
      initToken(getToken());
    }

    // check authentication
    if (checkToken()) {
      await fetchMe();
    }

    setIsNext(true);
  });

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
