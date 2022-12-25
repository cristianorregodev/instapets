import React from "react";
import { Link, Image } from "./styles";

const DEFAULT_IMAGE =
  "https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg";

export const Category = ({
  cover = DEFAULT_IMAGE,
  path = "#",
  emoji = "Loading",
}) => (
  <Link to={path}>
    <Image src={cover} alt={emoji} />
    {emoji}
  </Link>
);
