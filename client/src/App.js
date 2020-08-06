import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Route} from "react-router-dom";
import MainPage from "../src/components/Pages/MainPage/Main";
import Favorites from "./components/Pages/Favorites/Favorites";
import AdminArea from "./components/Pages/AdminArea/AdminArea";


function App() {
  return (
    <>
   
      <Router>
      <Route path exact ="/" component={Guest}/>
        {/* <Route path exact ="/" component={MapAndSearchContainer}/> */}
        <Route path = "/mapandcard" component={MapAndCardDisplay}/>
        <Route path = "/favorites" component={Favorites}/>
        <Route path = "/adminarea" component={AdminArea}/>
      </Router>
    </>
  );
}

export default App;
