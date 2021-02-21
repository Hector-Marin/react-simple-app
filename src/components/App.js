import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePageContainer from '../views/HomePageContainer';
import NewCardContainer from '../views/NewCardContainer';
import NotFound from '../views/NotFound';

const App = (props) => (
    <Router>
        <Switch>
            <Route exact path="/home" component={HomePageContainer}/>
            <Route exact path="/new-card" component={NewCardContainer}/> 
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default App;