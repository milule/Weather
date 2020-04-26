import styled from "styled-components";
import { Button, Fab } from "@material-ui/core";

const G = {};

G.Button = styled(Button)`
  color: white;
  padding: 0 30p;
  box-shadow: ${(props) =>
    props.mode === "primary"
      ? props.theme.palette.primary.shadowGradient
      : props.theme.palette.secondary.shadowGradient};
  background: ${(props) =>
    props.mode === "primary"
      ? props.theme.palette.primary.backgroundGradient
      : props.theme.palette.secondary.backgroundGradient};
`;

G.Fab = styled(Fab)`
  color: white;
  box-shadow: ${(props) =>
    props.mode === "primary"
      ? props.theme.palette.primary.shadowGradient
      : props.theme.palette.secondary.shadowGradient};
  background: ${(props) =>
    props.mode === "primary"
      ? props.theme.palette.primary.backgroundGradient
      : props.theme.palette.secondary.backgroundGradient};
`;

export { G };
