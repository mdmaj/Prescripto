import { createContext } from "react";

export const DoctorConext = createContext();

const DoctorConextProvider = (props) => {
  const value = {};

  return (
    <DoctorConext.Provider value={value}>
      {props.children}
    </DoctorConext.Provider>
  );
};

export default DoctorConextProvider;
