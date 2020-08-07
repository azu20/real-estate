import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Route} from "react-router-dom";
import MainPage from "../src/Pages/MainPage/Main";
import Favorites from "./Pages/Favorites/Favorites";
import AdminArea from "./Pages/AdminArea/AdminArea";


function App() {
  return (
    <>
   
      <Router>
        <Route exact path ="/" component={MainPage}/>
        <Route path = "/favorites" component={Favorites}/>
        <Route path = "/adminarea" component={AdminArea}/>
      </Router>
    </>
  );
}

export default App;
