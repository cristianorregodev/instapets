import React, { useContext } from "react";
import { SubmitButton } from "../SubmitButton";
import { Avatar, Card, Title } from "./styles";
import { Context } from "../../Context";

export const UserProfile = () => {
  const { removeAuth } = useContext(Context);
  const USER_PLACEHOLDER =
    "https://www.murrayglass.com/wp-content/uploads/2020/10/avatar-768x768.jpeg";
  return (
    <Card>
      <Avatar src={USER_PLACEHOLDER} alt="User photo" />
      <Title>Perfil de usuario</Title>
      <SubmitButton onClick={removeAuth}>Logout</SubmitButton>
    </Card>
  );
};
