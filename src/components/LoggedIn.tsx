import { useState } from "react";
import { AuthUser } from "../type";

export default function LoggedIn() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setUser({
      name: "Jubayer Alam Khan",
      email: "jubayer@gmail.com",
    });
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? "Logged in" : "Logged out"} </div>
      <div>User Name: {user?.name}</div>
      <div>User Email: {user?.email}</div>
    </div>
  );
}
