import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthRedirect } from "./AuthRedirect";
import { Room } from "./Room";
import { Create } from "./Create";
import { ConnectToSession } from "./ConnectToSession";
import Home from "./Home";
import "./App.css";
import { Layout } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={Create} />
          <Route path="/auth" exact component={AuthRedirect} />
          <Route path="/session/:id" component={Room} />
          <Route path="/session" component={ConnectToSession} exact />
          <Route path="/">404</Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
