import React from "react";
import { useParams } from "react-router-dom";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";

export const Detail = () => {
  const { detailId } = useParams();
  return <PhotoCardWithQuery id={detailId} />;
};
