import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightsReserverd from "./components/RightsReserverd";
import TeamMemberDeatails from "./components/TeamMemberDeatails";
import ServiceDetail from "./components/ServiceDetail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/services" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about/team/:slug" component={TeamMemberDeatails} />
        <Route exact path="/services/:slug" component={ServiceDetail} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
      <RightsReserverd />
    </div>
  );
}

export default App;
