import React from "react";
import { Container, Image, Link, Text } from "./styles";

export const ErrorNotFound = () => {
  return (
    <Container>
      <Image
        src="https://i.ibb.co/pKdLrtk/404-Error-with-a-cute-animal-rafiki.png"
        alt=""
      />
      <Text>No es posible encontrar esta ubicación.</Text>
      <Link to="/">Volver al inicio</Link>
    </Container>
  );
};
