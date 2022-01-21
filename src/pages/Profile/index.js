import { useParams } from "react-router-dom";

const Profile = () => {
  const params = useParams();
  const userId = params.userid;

  return (
    <>
      <div>user id = {userId}</div>
    </>
  );
};

export default Profile;
