import React, { useEffect, useState } from "react";
import {S} from './styled';
import { checkToken } from "../../utils";

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
      <S.Loading>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      </S.Loading>
    );

  return <>{children}</>;
}

export default AuthWrapper;
