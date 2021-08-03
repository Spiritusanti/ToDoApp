// redux imports
import { useSelector } from "react-redux";
// style import
import classes from "./ProfileUserInfo.module.scss";

// component will display user image, name, and date joined.
const ProfileUserInfo = () => {
  const user = useSelector((state) => state.auth.userInfo);

  // displayname
  const displayName = user.user.displayName
    ? user.user.displayName
    : "Username";
  return (
    <section className={classes.userProfile}>
      <img
        src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
        alt="profile"
      />
      <div className={classes.userInfo}>
        <h1>{displayName}</h1>
      </div>
    </section>
  );
};

export default ProfileUserInfo;
