import React, { useContext } from "react";
import { GoogleLogout } from "react-google-login";
import { useAlert } from "react-alert";

import Context from "../../state/context";
import { LOGOUT } from "../../state/types";

const Logout = () => {
  const { dispatch } = useContext(Context);
  const alert = useAlert();

  const onSignout = () => {
    dispatch({ type: LOGOUT });
    alert.show("Logged out", { type: "success" });
  };
  const onFailure = () => {
    alert.show("Could not log out", { type: "error" });
  };
  return (
    <GoogleLogout
      onLogoutSuccess={onSignout}
      onFailure={onFailure}
      buttonText="Signout"
    />
  );
};
export default Logout;
