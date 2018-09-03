import React from "react";

const Like = ({onClick}) => {
  let classes = "clickable fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={onClick}
      className={classes}
    />
  );
};

export default Like;
