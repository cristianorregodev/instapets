import React from "react";
import { Article, ImgWrapper, Image } from "./styles";
import { FavButton } from "../FavButton";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { useMuationToogleLike } from "../../hooks/useMuationToogleLike";
import { Link } from "react-router-dom";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, photoContainer] = useNearScreen();
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const handleFavClick = () => {
    !liked &&
      mutation({
        variables: {
          input: { id },
        },
      });
    setLiked(!liked);
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
