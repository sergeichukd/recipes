import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";
import NotFound from "./components/NotFound.jsx";
import Footer from "./components/Footer.jsx";

import "./styles/navbar.css";
import "./styles/content.css";
import "./styles/footer.css";
import "./styles/modal_windows.css";
import "./styles/recipe_details.css";

ReactDOM.render(
  <Router>
    <div className="layout">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/details" component={RecipeDetails} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>,
  document.getElementById("app")
);
