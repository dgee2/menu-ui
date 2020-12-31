import Navigation from "./Navigation";
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css'
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Links from "./Config";

function App() {
  return (
    <BrowserRouter>
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm4 ms-lg3 ms-xl2">
            <Navigation />
          </div>
          <div className="main-element ms-Grid-col ms-sm8 ms-lg9 ms-xl10">
              <Switch>
                {Links.map((link) => (
                  <Route exact path={link.url} key={link.url}>{link.component}</Route>
                ))}
              </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
