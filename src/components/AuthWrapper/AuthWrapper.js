import React, { useEffect } from "react";

function AuthWrapper({ children }) {
  useEffect(() => {}, []);

  return <>{children}</>;
}

export default AuthWrapper;
