import React, { useState } from "react";
import { produce } from "immer";
import { capitalize } from "lodash";
import { t } from "../../utils";
import { LoadingInline } from "../../components";
import { ReactComponent as ProfileIconSVG } from "../../assets/profile.svg";
import {
  AccountBox,
  Visibility,
  VisibilityOff,
  Lock,
} from "@material-ui/icons";
import {
  G,
  S,
  Box,
  Link,
  Typography,
  InputAdornment,
  IconButton,
} from "./styled";

function validateForm({ value, error }) {
  const errorForm = {};

  Object.keys(error).forEach((k) => {
    if (!value.hasOwnProperty(k)) return;
    errorForm[k] = validateValue(value[k], k);
  });

  return {
    errorForm,
    isValid: Object.values(errorForm).every((v) => v),
  };
}

function validateValue(value, k) {
  let message = "";

  if (value.length) {
    value = value.trim();
    message = !value && t("Validate.002").replace("{key}", capitalize(k));
  } else {
    message = t("Validate.001").replace("{key}", capitalize(k));
  }

  return message;
}

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState(() => {
    const value = { username: "", password: "" };
    const error = { ...value };
    return { value, error };
  });

  function handleValueFormChange(e) {
    setForm(
      produce(form, (draft) => {
        draft.value[e.target.id] = e.target.value;
        draft.error[e.target.id] = draft.error[e.target.id] && "";
      })
    );
  }

  function handleLoginClick() {
    const { isVaild, errorForm } = validateForm(form);

    setForm(
      produce(form, (draft) => {
        draft.error = errorForm;
      })
    );

    if (!isVaild) return;
  }

  const UserNameProps = { startAdornment: <UsernameStartAdornment /> };

  const PasswordProps = {
    startAdornment: <PasswordStartAdornment />,
    endAdornment: (
      <PasswordEndAdornment
        toggleShow={setShowPassword}
        isShow={showPassword}
      />
    ),
  };

  return (
    <S.Container>
      <S.Card elevation={8}>
        <S.Left>
          <ProfileIconSVG width="112" height="112" />
          <Box marginBottom="1rem">
            <Typography component="h4" variant="h4">
              Welcome
            </Typography>
          </Box>
          <S.TextField
            required
            id="username"
            label="Username"
            margin="normal"
            InputProps={UserNameProps}
            error={form.error.username ? true : false}
            active={form.value.username ? 1 : 0}
            value={form.value.username}
            helperText={form.error.username}
            onChange={handleValueFormChange}
          ></S.TextField>
          <S.TextField
            required
            id="password"
            label="Password"
            margin="dense"
            type={showPassword ? "text" : "password"}
            InputProps={PasswordProps}
            error={form.error.password ? true : false}
            active={form.value.password ? 1 : 0}
            value={form.value.password}
            helperText={form.error.password}
            onChange={handleValueFormChange}
          ></S.TextField>
          <Box width="100%" textAlign="right" marginBottom="2rem">
            <Link component="a" variant="body2" color="initial">
              Forgot Password?
            </Link>
          </Box>
          <G.Button fullWidth mode="primary" onClick={handleLoginClick}>
            Login <LoadingInline loading={true} />
          </G.Button>
        </S.Left>
        <S.Right></S.Right>
      </S.Card>
    </S.Container>
  );
}

function UsernameStartAdornment() {
  return (
    <InputAdornment position="start">
      <AccountBox color="action" />
    </InputAdornment>
  );
}

function PasswordStartAdornment() {
  return (
    <InputAdornment position="start">
      <Lock color="action" />
    </InputAdornment>
  );
}

function PasswordEndAdornment({ toggleShow, isShow }) {
  function handleClickShowPassword() {
    toggleShow(!isShow);
  }

  function handleMouseDownPassword(e) {
    e.preventDefault();
  }

  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
      >
        {isShow ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
}

export default Login;
