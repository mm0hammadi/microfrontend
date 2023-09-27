import React from "react";
import { Link, Outlet } from "react-router-dom";
import { app1RoutingPrefix, app2RoutingPrefix } from "../routing/constants";
import "./style.css";

export function Layout() {
  return (
    <>
      <nav className="nav">
        <Link
          to={`/${app1RoutingPrefix}/page-1`}
          style={{ marginRight: "1rem" }}
        >
          App1
        </Link>
        <Link
          to={`/${app1RoutingPrefix}/page-2`}
          style={{ marginRight: "1rem" }}
        >
          App2
        </Link>
        <Link
          to={`/${app2RoutingPrefix}/page-a`}
          style={{ marginRight: "1rem" }}
        >
          App3
        </Link>
        <Link to={`/${app2RoutingPrefix}/page-b`}>App4</Link>
      </nav>
      <Outlet />
    </>
  );
}
