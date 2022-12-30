import React, { useContext, useState } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../container/RegisterMutarion";
import { useLoginMutation } from "../container/LoginMutation";

export const NotRegisteredUser = () => {
  const [register, setRegister] = useState(false);
  const { activateAuth } = useContext(Context);
  const {
    registerMutation,
    mutationLoading: loadingRegister,
    mutationError: errorRegister,
  } = useRegisterMutation();
  const {
    login,
    mutationLoading: loadingLogin,
    mutationError: errorLogin,
  } = useLoginMutation();

  const setUserRegister = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    registerMutation({ variables }).then(({ data }) => {
      const { signup } = data;
      activateAuth(signup);
    });
  };

  const setUserLogin = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    login({ variables }).then(({ data }) => {
      const { login } = data;
      activateAuth(login);
    });
  };

  const registerError =
    errorRegister &&
    "Can not register, the user already exist or an internal error has ocurred.";
  const loginError =
    errorLogin &&
    "Can not login, the email dosn't exist or the password is invalid.";

  return (
    <>
      {!register ? (
        <UserForm
          error={loginError}
          loading={loadingLogin}
          onSubmit={setUserLogin}
          title="Login"
          register={register}
          setRegister={setRegister}
        />
      ) : (
        <UserForm
          error={registerError}
          loading={loadingRegister}
          onSubmit={setUserRegister}
          title="Register"
          register={register}
          setRegister={setRegister}
        />
      )}
    </>
  );
};
