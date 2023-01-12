import React, { createContext, useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";

const Context = createContext();

const Provider = (props) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token");
  });

  const client = useApolloClient();
  const activateAuth = (token) => {
    setIsAuth(true);
    window.sessionStorage.setItem("token", token);
  };

  const removeAuth = () => {
    setIsAuth(false);
    window.sessionStorage.removeItem("token");
    useEffect(() => {
      client.resetStore();
    }, [isAuth]);
  };

  return (
    <Context.Provider value={{ isAuth, activateAuth, removeAuth }}>
      {props.children}
    </Context.Provider>
  );
};

export { Provider, Context };
