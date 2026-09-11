import { useState } from "react";
import { AdminConext } from "./AdminContext.js";

const AdminConextProvider = (props) => {
  const [aToken, setAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : "",
  );

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const value = {
    aToken,
    setAToken,
    backendUrl,
  };

  return (
    <AdminConext.Provider value={value}>{props.children}</AdminConext.Provider>
  );
};

export default AdminConextProvider;
