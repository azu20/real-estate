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


function App() {
  return (
    <>
      {/* need to crete sub nav here for search options on this page */}
      {/* <Nav />
      <MapAndSearchContainer/> */}
      <Router>
        <Route path exact ="/" component={MapAndSearchContainer}/>
        <Route path = "/mapandcard" component={MapAndCardDisplay}/>
        <Route path = "/favorites" component={Favorites}/>
        <Route path = "/adminarea" component={AdminArea}/>
      </Router>
    </>
  );
}

export default App;
