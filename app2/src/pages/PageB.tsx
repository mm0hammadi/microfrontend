import React from "react";
import { Link } from "react-router-dom";

export function PageB() {
  return (
    <React.Fragment>
      <div style={{ height: "100vh", marginTop: "300px" }}>
        Page B from App2
      </div>
      <Link to="/page-a">Go to Page A</Link>
    </React.Fragment>
  );
}
