import React from "react";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";
import { Nav, Link } from "./styles";
export const NavBar = () => {
  const ICON_SIZE = "30px";
  return (
    <Nav>
      <Link to="/">
        <MdHome size={ICON_SIZE} />
      </Link>
      <Link to="/favs">
        <MdFavoriteBorder size={ICON_SIZE} />
      </Link>
      <Link to="/user">
        <MdPersonOutline size={ICON_SIZE} />
      </Link>
    </Nav>
  );
};
