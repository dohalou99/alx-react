import React from "react";

export const user = {
  email: "",
  password: "",
  isLoggedIn: false,
};

export const logOut = () => {};

const AppContext = React.createindex({ user, logOut });

export default Appindex;
