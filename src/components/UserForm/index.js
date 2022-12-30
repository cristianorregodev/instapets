import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import {
  Form,
  Input,
  Button,
  Title,
  Logo,
  Container,
  Link,
  Error,
} from "./styles";

export const UserForm = ({
  error,
  loading,
  onSubmit,
  title,
  register,
  setRegister,
}) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };
  return (
    <Container>
      <Logo src="https://i.ibb.co/T1WvKB0/pet-care.png" alt="Logo" />
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={loading} type="email" placeholder="Email" {...email} />
        <Input
          disabled={loading}
          type="password"
          placeholder="*********"
          {...password}
        />
        <Button disabled={loading}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
      {!register ? (
        <Link onClick={() => setRegister(!register)}>
          Create a new account?
        </Link>
      ) : (
        <Link onClick={() => setRegister(!register)}>Login?</Link>
      )}
    </Container>
  );
};
