import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Buttons from './components/buttons'
import Links from './components/links'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Links}/>
                <Route path="/buttons" exact component={Buttons} />
            </Switch>
        </Router>
    )
}

export default Routes