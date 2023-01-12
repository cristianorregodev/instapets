import React from "react";
import { Link, Grid, Image, Title } from "./styles";

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <>
      <Title>Tus favoritos</Title>
      <Grid>
        {favs.map((fav) => (
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image src={fav.src} />
          </Link>
        ))}
      </Grid>
    </>
  );
};
