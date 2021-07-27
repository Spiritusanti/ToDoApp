// component imports
import ProfileStats from "../components/Profile/ProfileStats.component";
import ProfileUserInfo from "../components/Profile/ProfileUserInfo.component";
import Card from "../components/UI/Card/Card.component";

const Profile = () => {
  return (
    <Card>
      <article>
        <ProfileUserInfo />
        <ProfileStats />
      </article>
    </Card>
  );
};

export default Profile;
