import React from "react";

type StyleProps = {
  styles: React.CSSProperties;
};

export default function Box(props: StyleProps) {
  return (
    <>
      <div style={props?.styles}>This is box</div>
    </>
  );
}
