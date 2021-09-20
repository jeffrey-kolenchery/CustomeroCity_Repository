import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./views/Login";
function App() {
  return (
    <div>
      {/* Route components are rendered if the path prop matches the current URL */}
      <Switch>
        {/* Vendor Routes */}
        {/* <Route path="/register" component={Register} /> */}
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
