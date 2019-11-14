import './app.component.css';

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </Switch>
  </div>
);

export default App;
