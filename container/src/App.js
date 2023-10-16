import React, { lazy, Suspense, useEffect, useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "./components/Progress";
import { createBrowserHistory } from "history";

const CardLazy = lazy(() => import("./components/CardApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const BatchLazy = lazy(() => import("./components/BatchApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "container-app",
});

const history = createBrowserHistory();

const App = () => {
  const [isSignedIn, setSignIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Header isSignedIn={isSignedIn} onSignOut={() => setSignIn(false)} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={() => setSignIn(true)} />
            </Route>
            {/* <Route path="/auth/signup" component={AuthLazy} /> */}
            <Route path="/" component={CardLazy} />
            <Route path="/" component={BatchLazy} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </Router>
  );
};

export default App;
