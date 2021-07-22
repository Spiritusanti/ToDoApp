// component imports
import Card from "../UI/Card/Card.component";
// style imports
import classes from "./ProfileInsert.module.scss";

//adds in a brief profile overview to the todos page.
// Includes a profile image and username.
const ProfileInsert = () => {
  return (
    <Card>
      <article className={classes.insert}>
        <section className={classes.userInfo}>
          <img src='https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png' alt="profile" />
          <h2>Username</h2>
        </section>
      </article>
    </Card>
  );
};

export default ProfileInsert;
