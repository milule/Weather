import React, { memo } from "react";
import PropTypes from "prop-types";
import { css } from "styled-components";
import { BeatLoader } from "react-spinners";

const override = css`
  display: flex;
  margin: 0 5px;
  transition: 0.25;
`;

const LoadingInline = memo(({ loading }) =>
  loading ? <BeatLoader css={override} size={10} color="#fff" /> : null
);

LoadingInline.propTypes = {
  loading: PropTypes.bool,
};

LoadingInline.defaultProps = {
  loading: false,
};

export default LoadingInline;
