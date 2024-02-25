import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.scss";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import SinglePortfolio from "./pages/SinglePortfolio/SinglePortfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Team from "./pages/Team/Team";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/BlogPost/BlogPost";
import Terms from "./pages/Terms/Terms";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import 'aos/dist/aos.css';
import Aos from "aos";

const App = () => {

  useEffect(()=>{
    Aos.init();
  })
  return (
    <div className="app">
      <Router>
      <ScrollToTop/>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/portfolio" exact component={Portfolio}></Route>
            <Route
              path="/portfolio/:id"
              exact
              component={SinglePortfolio}
            ></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/contact" exact component={Contact}></Route>
            <Route path="/team" exact component={Team}></Route>
            <Route path="/blog" exact component={Blog}></Route>
            <Route path="/blog/:id" exact component={BlogPost}></Route>
            <Route path="/terms" exact component={Terms}></Route>
          </Switch>
      </Router>
    </div>
  );
};

export default App;
