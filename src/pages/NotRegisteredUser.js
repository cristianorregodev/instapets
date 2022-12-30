import React, { useContext, useState } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../container/RegisterMutarion";

export const NotRegisteredUser = () => {
  const [register, setRegister] = useState(false);
  const { activateAuth } = useContext(Context);
  const { registerMutation } = useRegisterMutation();

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    registerMutation({ variables }).then(activateAuth);
  };

  return (
    <>
      {!register ? (
        <UserForm
          onSubmit={onSubmit}
          title="Login"
          register={register}
          setRegister={setRegister}
        />
      ) : (
        <UserForm
          onSubmit={onSubmit}
          title="Register"
          register={register}
          setRegister={setRegister}
        />
      )}
    </>
  );
};
