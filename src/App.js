import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './about';
import TeamComponent from './otherCountryTrack';
import HeaderComponent from './header';
import Artist from './artist'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <HeaderComponent></HeaderComponent> */}
        
          <Route exact path='/' component={HeaderComponent}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/otherCountryTrack' component={TeamComponent}></Route>
          <Route exact path='/artist' component={Artist}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
