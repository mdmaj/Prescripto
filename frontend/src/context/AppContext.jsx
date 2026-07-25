import AppContext from "./AppContext";
import { doctors } from "../assets/assets_frontend/assets";

const AppContextProvider = ({ children }) => {
  const currencySymbol = "$";
  const value = {
    doctors,
    currencySymbol,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
