import React, { lazy, Suspense, useEffect, useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

const CardLazy = lazy(() => import("./components/CardApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const BatchLazy = lazy(() => import("./components/BatchApp"));

const App = () => {
  const [isSignedIn, setSignIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return <Header isSignedIn={isSignedIn} onSignOut={() => setSignIn(false)} />;
};

export default App;
