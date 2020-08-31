import React from 'react';
import './App.css';
import Home from "../src/components/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../src/Pages/MainPage/Main";
import Favorites from "./Pages/Favorites/Favorites";
import Guest from  "../src/components/Guest/Guest";
import AdminArea from "./Pages/AdminArea/AdminArea";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading/Loading";
import UserDetails from './Pages/UserDetails/UserDetails';
import InvisiblePage from './components/InvisiblePage/InvisiblePage';
import AuthForFavs from './components/AuthForFavs/AuthForFavs';

// import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (

    <Router>

      <Route exact path="/" component={Home} />
      <Route exact path="/main" component={MainPage} />
      <Route exact path="/favorites" component={AuthForFavs} />
      <Route exact path="/adminarea" component={AdminArea} />
      <Route exact path="/invisible" component={InvisiblePage} />
      <Route exact path="/users/:id" component={UserDetails} />


    </Router>

  );
}

export default App;
