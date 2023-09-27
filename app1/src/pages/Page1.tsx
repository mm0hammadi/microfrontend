import React from 'react';
import { Link } from 'react-router-dom';

export function Page1() {
  return (
    <React.Fragment>
      <div style={{ height: "100vh", marginTop: "300px" }}>Page 1 from App1</div>
      <Link to="/page-2">Go to Page 2</Link>
    </React.Fragment>
  );
}