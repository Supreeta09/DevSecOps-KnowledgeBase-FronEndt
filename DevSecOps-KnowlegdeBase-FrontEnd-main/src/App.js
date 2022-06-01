//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Blackduck from './Pages/blackduck';
import Defender from './Pages/defender';
import Home from './Pages/home';
import Profile from './Pages/profile';
//import { render } from '@testing-library/react';

function App() {
  return (
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
}

export default App;
