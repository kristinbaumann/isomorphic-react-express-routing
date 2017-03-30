import React from 'react';
import { Route, Router } from 'react-router';

import App from './App';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

const routes = (
    <Router>
        <Route path='/' component={App} />
        <Route path='/componentA' component={ComponentA} />
        <Route path='/componentB' component={ComponentB} />
    </Router>
);

export default routes;  