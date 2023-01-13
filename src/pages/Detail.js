import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";

export const Detail = () => {
  const { detailId } = useParams();
  return (
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  );
};
