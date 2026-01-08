import UserCard from "./usercard";

function Profile() {

  const user = {
    name: "Priyanshu",
    email: "Priyanshu@gmail.com"
  };

  return <UserCard user={user} />;
}

export default Profile;
