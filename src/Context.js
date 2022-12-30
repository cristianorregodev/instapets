import React, { createContext, useState } from "react";

const Context = createContext();

const Provider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  const activateAuth = () => setIsAuth(true);

  return (
    <Context.Provider value={{ isAuth, activateAuth }}>
      {props.children}
    </Context.Provider>
  );
};

export { Provider, Context };
