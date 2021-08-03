// component imports
import ProfileStats from "../components/Profile/ProfileStats.component";
import ProfileUserInfo from "../components/Profile/ProfileUserInfo.component";
import ProfileUpdateForm from "../components/Profile/ProfileUpdateForm.component";
import Card from "../components/UI/Card/Card.component";
// style imports
import classes from "./Profile.module.scss";

const Profile = () => {
  return (
    <Card>
      <article>
        <ProfileUserInfo />
        <section className={classes.userInfo}>
          <div>
            <ProfileStats />
          </div>
          <div>
            <ProfileUpdateForm />
          </div>
        </section>
      </article>
    </Card>
  );
};

export default Profile;
