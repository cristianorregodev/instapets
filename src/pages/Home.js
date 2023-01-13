import React from "react";
import { useParams } from "react-router-dom";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const { categoryId } = useParams();
  return (
    <>
      <Helmet>
        <title>Instapets - Pics app for pets</title>
        <meta
          name="description"
          content="With Instapets you can find photos of very beautiful pets"
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
});
