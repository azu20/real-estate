import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "../src/Pages/MainPage/Main";
import Favorites from "./Pages/Favorites/Favorites";
import AdminArea from "./Pages/AdminArea/AdminArea";
import Guest from "./components/Guest/Guest";
// import MapAndCardDisplay from "./components/MapAndCardDispay/MapAndCardDispay"


function App() {
  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/" component={Guest} />
          {/* <Route path exact ="/" component={MapAndSearchContainer}/> */}
          {/* <Route path="/mapandcard" component={MapAndCardDisplay} /> */}
          <Route exact path="/main" component={MainPage} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/adminarea" component={AdminArea} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
