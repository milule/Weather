import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LoadingWrapper } from "../index";
import { checkToken } from "../../utils";

const S = {};

S.Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

function AuthWrapper({ children }) {
  const [isNext, setIsNext] = useState(false);

  useEffect(() => {
    async function fetchMe() {}

    if (checkToken) {
    } else {
    }
  }, []);

  if (!isNext)
    return (
      <S.Container>
        <LoadingWrapper loading={true} />
      </S.Container>
    );

  return <>{children}</>;
}

export default AuthWrapper;
