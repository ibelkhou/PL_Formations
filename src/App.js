import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import { Container } from 'react-bootstrap';
import FormationsComponent from './components/formations/FormationsComponent';
import FormationComponent from './components/formations/FormationComponent';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <Container>
          <HeaderComponent />
          <div className="bodyApp">
            <Switch>
              <Route exact path='/' component={HomeComponent} />
              <Route path='/formations' component={FormationsComponent} />
              <Route path='/about' component={AboutComponent} />
              <Route path='/displayForma/:formaId?' component={FormationComponent} />
            </Switch>
          </div>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;