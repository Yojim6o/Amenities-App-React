import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomeComponent from './components/HomeComponent';
import LocationComponent from './components/LocationComponent';

export default(
    <Route path="/" component={App} >
        <IndexRoute component={HomeComponent} />
        <Route path="/location/:state/:city" component={LocationComponent} />
    </Route>
);
