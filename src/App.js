import React from "react";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Home} from "./components/Home/Home";

import {Catalog} from "./components/Catalog/Catalog";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AboutUs} from "./components/AboutUs/AboutUs";



const App = () => {
  return (
      <div>
          <BrowserRouter>
              <div>
                  <Switch>
                      <Route exact path="/">
                          <Header/>
                          <Home/>
                      </Route>
                      <Route path="/catalog">
                          <Header/>
                          <Catalog/>
                      </Route>
                      <Route path="/about_us">
                          <Header/>
                          <AboutUs/>
                      </Route>
                  </Switch>
                  <Footer/>
              </div>
          </BrowserRouter>
      </div>
  );
};

export default App;
