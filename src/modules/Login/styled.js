import styled from "styled-components";
import { G } from "../../styles/globalStyled";
import BackgroundSVG from "../../assets/main-bg.svg";
import WeatherSVG from "../../assets/weather-bg.svg";
import {
  Typography,
  Paper,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Link,
} from "@material-ui/core";

const S = {};

S.Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-image: url(${BackgroundSVG});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${(props) => `${props.theme.palette.primary.main}0C`};
`;

S.Card = styled(Paper)`
  width: 65vw;
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0;
  border-radius: 16px;
`;

S.Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-image: url(${WeatherSVG});
  background-size: cover;
  background-repeat: no-repeat;
`;

S.Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 25%;
  padding-right: 25%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: white;
`;

S.TextField = styled(TextField)`
  width: 100%;

  .Mui-focused .MuiSvgIcon-root {
    color: ${(props) => props.theme.palette.primary.main};
  }

  .MuiInput-underline:before,
  .MuiInputLabel-root,
  .MuiSvgIcon-root {
    transition: .5s;
    border-width: 2px;
    border-color: ${(props) =>
      props.error
        ? props.theme.palette.error.main
        : props.active && props.theme.palette.primary.main};
    color: ${(props) =>
      props.error
        ? props.theme.palette.error.main
        : props.active && props.theme.palette.primary.main};
  }
`;

export { G, S, Box, Link, Typography, InputAdornment, IconButton };
