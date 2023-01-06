import React from "react";
import { Link, Grid, Image } from "./styles";

export const LoadingFavs = () => {
  const IMAGE_DEFAULT =
    "https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg";
  return (
    <Grid>
      {[0, 1, 2].map((fav) => (
        <Link key={fav}>
          <Image src={IMAGE_DEFAULT} />
        </Link>
      ))}
    </Grid>
  );
};
