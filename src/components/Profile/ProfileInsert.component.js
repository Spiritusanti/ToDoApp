// component imports
import Card from "../UI/Card/Card.component";
// redux imports
import { useSelector } from "react-redux";
// router imports
import { Link } from "react-router-dom";
// style imports
import classes from "./ProfileInsert.module.scss";

//adds in a brief profile overview to the todos page.
// Includes a profile image and username.
const ProfileInsert = () => {
  const user = useSelector((state) => state.auth.userInfo);
  // placeholder profile image
  const placeholderImage =
    "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png";

  // displayname
  const displayName = user.displayName ? user.displayName : "Username";
  // user image
  const userImage = user.photoURL ? user.photoURL : placeholderImage;
  return (
    <Card>
      <article className={classes.insert}>
        <section className={classes.userInfo}>
          <img src={userImage} alt="profile" />
          {!displayName && <Link to="/profile">Edit profile</Link>}
          {displayName && <h2>{displayName}</h2>}
        </section>
      </article>
    </Card>
  );
};

export default ProfileInsert;
