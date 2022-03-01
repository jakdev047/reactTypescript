import React from "react";

type TopNavigationProps = {
  children: string;
};

export default function TopNavigation(props: TopNavigationProps) {
  return <div>{props?.children}</div>;
}
