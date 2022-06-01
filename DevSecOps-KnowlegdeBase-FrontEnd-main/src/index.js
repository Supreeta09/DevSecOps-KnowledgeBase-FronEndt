import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Blackduck from './Pages/blackduck';
import Defender from './Pages/defender';
import Home from './Pages/home';
import Profile from './Pages/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blackduck" component={Blackduck} />
        <Route exact path="/defender" component={Defender} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
