import styled, { css } from "styled-components";
import { HashLoader as LoadingIcon } from "react-spinners";

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  pointer-events: ${(props) => (props.loading ? "none" : "all")};
`;

const LoadingElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(0.6px);
  background-color: rgba(255, 255, 255, 0.3);
`;

const override = css`
  position: relative;
  z-index: 910;
`;

export { LoadingContainer, LoadingElement, LoadingIcon, override };
