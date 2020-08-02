import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import MapAndSearchContainer from "./components/MapAndSearchContainer/MapAndSearchContainer.js";
import MapAndCardDisplay from "./components/MapAndCardDispay/MapAndCardDispay";
import Favorites from "./components/Favorites/Favorites";
import AdminArea from "./components/AdminArea/AdminArea";
import TestAreaForAPIHooks from "./components/TestAreaForAPIHooks/TestAreaForAPIHooks";


function App() {
  return (
    <>
      {/* need to crete sub nav here for search options on this page */}
      {/* <Nav />
      <MapAndSearchContainer/> */}
      <Router>
        <Route path  ="/" component={TestAreaForAPIHooks}/>
        {/* <Rout path = "/" component{stub_for_login_component} */}
        
        <Route path = "/mapandcard" component={MapAndCardDisplay}/>
        <Route path = "/favorites" component={Favorites}/>
        <Route path = "/adminarea" component={AdminArea}/>
      </Router>
    </>
  );
}

export default App;
