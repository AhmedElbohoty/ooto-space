import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Dashboard from "./component/Dashboard";

import "./styles/base.css";
import "./styles/layout.css";
import "./styles/modules/common.css";
import "./styles/modules/nav.css";
import "./styles/modules/topbar.css";
import "./styles/modules/files.css";

function App() {
  return (
    <BrowserRouter>
      <section className="App">
        <Route exact path="/" component={Dashboard} />
      </section>
    </BrowserRouter>
  );
}

export default App;
