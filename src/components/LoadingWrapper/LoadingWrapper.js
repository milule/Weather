import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  LoadingContainer,
  LoadingElement,
  LoadingIcon,
  override,
} from "./styled";

const LoadingWrapper = memo(({ children, loading, color }) => (
  <LoadingContainer loading={loading ? 1 : 0}>
    {loading && (
      <LoadingElement>
        <LoadingIcon css={override} size={35} margin={2} color={color} />
      </LoadingElement>
    )}
    {children}
  </LoadingContainer>
));

LoadingWrapper.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
};

LoadingWrapper.defaultProps = {
  loading: false,
  color: "#2196F3",
};

export default LoadingWrapper;
