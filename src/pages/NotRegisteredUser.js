import React, { useContext, useState } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../container/RegisterMutarion";

export const NotRegisteredUser = () => {
  const [register, setRegister] = useState(false);
  const { activateAuth } = useContext(Context);
  const { registerMutation, mutationLoading, mutationError } =
    useRegisterMutation();

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    registerMutation({ variables }).then(activateAuth);
  };

  const errorMsg =
    mutationError &&
    "Can not register, the user already exist or an internal error has ocurred.";

  return (
    <>
      {!register ? (
        <UserForm
          error={errorMsg}
          loading={mutationLoading}
          onSubmit={onSubmit}
          title="Login"
          register={register}
          setRegister={setRegister}
        />
      ) : (
        <UserForm
          error={errorMsg}
          loading={mutationLoading}
          onSubmit={onSubmit}
          title="Register"
          register={register}
          setRegister={setRegister}
        />
      )}
    </>
  );
};
