import React from "react";
import LogIn from "./LogIn";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export default function Private({
  isLoggedIn,
  component: Component,
}: PrivateProps) {
  if (isLoggedIn) {
    return <Component name="Jubayer Alam Khan" />;
  } else {
    return <LogIn />;
  }
}
