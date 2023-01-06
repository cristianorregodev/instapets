import React from "react";
import { useGetFavorite } from "../container/GetFavorites";
import { ListOfFavs } from "../components/ListOfFavs";
import { LoadingFavs } from "../components/LoadingFavs";
import { ErrorMessage } from "../components/ErrorMessage";

export const Favs = () => {
  const { data, loading, error } = useGetFavorite();

  if (loading) return <LoadingFavs />;
  if (error) return <ErrorMessage />;

  return <ListOfFavs favs={data.favs} />;
};
