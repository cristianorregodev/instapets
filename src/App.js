import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Logo />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:categoryId" element={<Home />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
};
