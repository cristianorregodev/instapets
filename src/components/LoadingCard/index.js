import React from "react";
import { ImgWrapper, Article, Icon, Likes, Button, Image } from "./styles";

export const LoadingCard = () => {
  return (
    <Article>
      <a href="#">
        <ImgWrapper>
          <Image src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg" />
        </ImgWrapper>
      </a>
      <Button>
        <Icon></Icon>
        <Likes></Likes>
      </Button>
    </Article>
  );
};
