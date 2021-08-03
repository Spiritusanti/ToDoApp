// react imports
import { useState, Fragment } from "react";
// style imports
import classes from "./ProfileUpdateForm.module.scss";

const ProfileUpdateForm = () => {
  const [showForm, setShowForm] = useState(false);

  //   form handlers
  const showFormHandler = () => {
    setShowForm(true);
  };
  const hideFormHandler = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  return (
    <div className="form-wrapper">
      {!showForm && (
        <div className={classes.btnContainer}>
          <button onClick={showFormHandler}>Edit Profile</button>
        </div>
      )}
      {showForm && (
        <form onSubmit={hideFormHandler}>
          <h1>Update your Profile</h1>
          <div className={classes.btnContainerClose}>
            <button>&#10006;</button>
          </div>
          <ul>
            <li>
              <label htmlFor="usernameInput">Add username:</label>
              <input id="usernameInput" type="text" maxLength="100" />
            </li>
            <li>
              <label htmlFor="profileImageInput">Add Profile Photo: </label>
              <input id="profileImageInput" type="file" />
            </li>
          </ul>
          <div className={classes.btnContainer}>
            <button>Submit changes</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfileUpdateForm;
