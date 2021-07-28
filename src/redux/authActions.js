// redux imports
import { authActions } from "./auth-slice";
// firebase imports
import firebase from "firebase";

// action creators
export const logOut = () => {
  return async (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(dispatch(authActions.onLogOut))
      .catch((err) => console.log(err));
  };
};
