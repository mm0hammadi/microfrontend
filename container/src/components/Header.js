import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

const pages = [
  {
    page: "batch",
    page: "dictionary",
    page: "card",
  },
];

export default function Header({ isSignedIn, onSignOut }) {
  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return <React.Fragment>header</React.Fragment>;
}
