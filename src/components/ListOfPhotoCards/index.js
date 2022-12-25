import React from "react";
import { useQuery } from "@apollo/client";
import { PhotoCard } from "../PhotoCard";
import { List } from "./styles";
import { GET_PHOTOS } from "../../hoc/withPhotos";
import { LoadingCard } from "../LoadingCard";

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });
  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return [1, 2, 3, 4].map((id) => <LoadingCard key={id} />);
  }
  return (
    <List>
      {data.photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard id={photo.id} {...photo} />
        </li>
      ))}
    </List>
  );
};
