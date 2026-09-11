import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AdminConextProvider from "./context/AdminContext.jsx";
import DoctorConextProvider from "./context/DoctorContext.jsx";
import AppContextProvider from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminConextProvider>
      <DoctorConextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </DoctorConextProvider>
    </AdminConextProvider>
  </BrowserRouter>,
);
