import React from "react";
import { useGetFavorite } from "../container/GetFavorites";
import { ListOfFavs } from "../components/ListOfFavs";
import { LoadingFavs } from "../components/LoadingFavs";
import { ErrorMessage } from "../components/ErrorMessage";
import { Layout } from "../components/Layout";

export const Favs = () => {
  const { data, loading, error } = useGetFavorite();

  if (loading) return <LoadingFavs />;
  if (error) return <ErrorMessage />;

  return (
    <Layout
      title={"Your favs"}
      subtitle={"Here you can find your favorite pets"}
    >
      <ListOfFavs favs={data.favs} />
    </Layout>
  );
};
