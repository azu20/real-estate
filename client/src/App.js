import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../src/Pages/MainPage/Main";
import Favorites from "./Pages/Favorites/Favorites";
import AdminArea from "./Pages/AdminArea/AdminArea";
import Guest from "./components/Guest/Guest";
import Form from "./Pages/Form/Form"
import ConditionalPage from "./components/InvisiblePage/InvisiblePage"
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading/Loading";
import Home from "../src/components/Home/Home";


function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>

      <Router>
        {/* <Route exact path="/form" component={Form} />
        <Route exact path="/" component={Guest} />
        <Route exact path ="/conditional" component={ConditionalPage}/>
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/adminarea" component={AdminArea} /> */}
      <Route exact path ="/" component={Home}/>
        <Route exact path ="/main" component={MainPage}/>
        <Route exact path = "/favorites" component={Favorites}/>
        <Route exact path = "/adminarea" component={AdminArea}/>
      </Router>
    </>
  );
}

export default App;
