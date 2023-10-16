import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "card-app",
});

const App = ({ history }) => {
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Switch>
          <Route exact path="/" component={Pricing} />
          {/* <Route path="/" component={Landing} /> */}
        </Switch>
      </StylesProvider>
    </Router>
  );
};

export default App;
