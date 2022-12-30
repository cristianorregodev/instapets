import React from "react";
import { Article, ImgWrapper, Image } from "./styles";
import { FavButton } from "../FavButton";
import { useNearScreen } from "../../hooks/useNearScreen";
import { useMuationToogleLike } from "../../hooks/useMuationToogleLike";
import { Link } from "react-router-dom";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, photoContainer] = useNearScreen();
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike();
  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id },
      },
    });
  };

  return (
    <Article ref={photoContainer}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Image src={src} alt={id} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};
