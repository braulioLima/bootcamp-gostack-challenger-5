import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main/index';
import Repository from './pages/Repository/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" exact component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
