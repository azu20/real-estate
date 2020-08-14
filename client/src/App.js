import React from 'react';
import './App.css';
import Home from "../src/components/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../src/Pages/MainPage/Main";
import Favorites from "./Pages/Favorites/Favorites";
import AdminArea from "./Pages/AdminArea/AdminArea";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading/Loading";
import InvisiblePage from './components/InvisiblePage/InvisiblePage';
import history from "../src/utils/history"

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    
      <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route  path="/main" component={MainPage} />
        <Route  path="/favorites" component={Favorites} />
        <Route  path="/adminarea" component={AdminArea} />
        <Route   path="/invisible" component={InvisiblePage}/>
      </Router>
   
  );
}

export default App;
