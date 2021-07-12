import React,{ useState, createContext } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={[darkMode, setdarkMode]}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
export { DarkModeContext, DarkModeProvider };
