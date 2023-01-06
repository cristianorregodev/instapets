import React, { useContext } from "react";
import { Context } from "../../Context";
import { Container, Image, Link, Text } from "./styles";

export const ErrorMessage = () => {
  const { removeAuth } = useContext(Context);
  return (
    <Container>
      <Image src="https://i.ibb.co/KLgzhZW/No-data-cuate.png" alt="" />
      <Text>
        Tu sesión ha caducado, no es posible mostrar el contenido de la página.
      </Text>
      <Link to="/" onClick={() => removeAuth()}>
        Volver al inicio
      </Link>
    </Container>
  );
};
