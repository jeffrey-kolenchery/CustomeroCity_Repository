import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./views/Login";
function App() {
  return (
    <div>
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
