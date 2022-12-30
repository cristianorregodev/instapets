import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { NavBar } from "./components/NavBar";
import { Context } from "./Context";

export const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Logo />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:categoryId" element={<Home />} />
        <Route path="/detail/:detailId" element={<Detail />} />

        <Route
          path="/favs"
          element={isAuth ? <Favs /> : <NotRegisteredUser />}
        />
        <Route
          path="/user"
          element={isAuth ? <User /> : <NotRegisteredUser />}
        />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
};
