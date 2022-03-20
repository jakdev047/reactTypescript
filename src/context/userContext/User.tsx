import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function User() {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: "Jubayer Alam Khan",
        email: "jubayer@gmail.com",
      });
    }
  };
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };

  return (
    <>
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        {userContext && (
          <>
            <div>User name is {userContext?.user?.name} </div>
            <div>User email is {userContext?.user?.email} </div>
          </>
        )}
      </div>
    </>
  );
}
