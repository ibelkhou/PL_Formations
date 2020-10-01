import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';
import FormationsComponent from './components/FormationsComponent';
import AboutComponent from './components/AboutComponent';
import { Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
    <BrowserRouter history={Router.browserHistory}>
        <Container>
          <HeaderComponent />
          <Switch>
              <Route exact path='/' component={HomeComponent} />
              <Route path='/formations' component={FormationsComponent} />
              <Route path='/about' component={AboutComponent} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;