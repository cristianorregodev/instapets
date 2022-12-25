import React from "react";
import { PhotoCard } from "../components/PhotoCard";
import { gql, useQuery } from "@apollo/client";
import { LoadingCard } from "../components/LoadingCard";

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id: id,
    },
  });
  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <LoadingCard />;
  }

  return <PhotoCard {...data.photo} />;
};
