import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Route} from "react-router-dom";
import MainPage from "../src/Pages/MainPage/Main";
import Favorites from "./Pages/Favorites/Favorites";
import AdminArea from "./Pages/AdminArea/AdminArea";
import Home from "../src/components/Home/Home";


function App() {
  return (
    <>
   
      <Router>
      <Route exact path ="/" component={Home}/>
        <Route exact path ="/main" component={MainPage}/>
        <Route exact path = "/favorites" component={Favorites}/>
        <Route exact path = "/adminarea" component={AdminArea}/>
      </Router>
    </>
  );
}

export default App;
