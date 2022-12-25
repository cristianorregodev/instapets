import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Home />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
