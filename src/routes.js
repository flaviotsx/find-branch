import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Branch from './pages/Branch';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Main} />
        <Route path="/Branch" component={Branch} />
      </Switch>
    </BrowserRouter>
  );
}