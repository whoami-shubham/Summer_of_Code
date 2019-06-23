import React, { Component } from 'react';
import {HashRouter as Router ,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Working from './components/Working'
import We from './components/We'
import Privacy from './components/Privacy'
import Rules from './components/Rules'
import Resources from './components/Resources'
import Contact from './components/Contact'
import Help from './components/Help'
import Leaderboard from './components/Leaderboard'
import Students from './components/Students';
import Mentors from './components/Mentors';


class App extends Component {
  render() {
    return (
      <Router>
         <div>
            <Route path="/" exact component={Home} />
            <Route path="/home"  component={Home} />
            <Route path="/about"  component={About} />
            <Route path="/projects"  component={Projects} />
            <Route path="/how-it-works"  component={Working} />
            <Route path="/we" component={We} />
            <Route path="/rules"  component={Rules} />
            <Route path="/privacy"  component={Privacy} />
            <Route path="/resources" component={Resources} />
            <Route path="/contact"  component={Contact} />
            <Route path="/help"  component={Help} />
            <Route path="/leaderboard"  component={Leaderboard} />
            <Route path="/students"  component={Students} />
            <Route path="/mentors"  component={Mentors} />
         </div>
      </Router>
    );
  }
}

export default App;
