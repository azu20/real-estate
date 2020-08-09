
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = ({user}) => {
  
    console.log(user.name);
  return (
    isAuthenticated && (
      <div>
        
        <h2>Hello {user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;



const Home = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <>
            {isAuthenticated ? <Profile user={user} /> : <Guest />}
        </>
    );
};

export default Home;






// const Home = () => {
//     const { user, isAuthenticated } = useAuth0();

//     return (
//         <>
//             {isAuthenticated ? <Profile user={user} /> : <Guest />}
//         </>
//     );
// };

// export default Home;