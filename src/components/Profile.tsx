
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

      if (isAuthenticated){
          return (
            user?.sub
          )
      }
      else {
          return false
      }
};

export default Profile;