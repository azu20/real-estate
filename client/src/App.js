import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Route} from "react-router-dom";
import MainPage from "../src/Pages/MainPage/Main";
import Favorites from "./Pages/Favorites/Favorites";
import AdminArea from "./Pages/AdminArea/AdminArea";
import Guest from "./components/Guest/Guest";
import Form from "./Pages/Form/Form"


function App() {
  return (
    <>
   
      <Router>
      {/* <Route exact path ="/" component={Form}/> */}
      <Route exact path ="/" component={Guest}/>
      <Route exact path ="/form" component={Form}/>
      {/* <Route exact path ="/condition" component={ConditionalHome}/> */}
        <Route exact path ="/main" component={MainPage}/>
        <Route exact path = "/favorites" component={Favorites}/>
        <Route exact path = "/adminarea" component={AdminArea}/>
      </Router>
    </>
  );
}

export default App;
