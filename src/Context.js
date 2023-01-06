import React, { createContext, useState } from "react";

const Context = createContext();

const Provider = (props) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token");
  });

  const activateAuth = (token) => {
    setIsAuth(true);
    window.sessionStorage.setItem("token", token);
  };

  const removeAuth = () => {
    setIsAuth(false);
    window.sessionStorage.removeItem("token");
  };

  return (
    <Context.Provider value={{ isAuth, activateAuth, removeAuth }}>
      {props.children}
    </Context.Provider>
  );
};

export { Provider, Context };
