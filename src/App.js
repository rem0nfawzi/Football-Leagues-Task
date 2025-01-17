import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Competition from "./components/competition/Competition";
import Layout from "./components/common/Layout";
import { Provider } from "react-redux";
import store from "./store/store";
import TeamDetails from "./components/team/TeamDetails";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/league/:id" component={Competition} />
            <Route
              exact
              path="/league/:leagueId/team/:id"
              component={TeamDetails}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
