import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import HomePage from "./pages/home/HomePage";
import Error404 from "./pages/errors/Error404";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faStroopwafel} from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route component={Error404}/>
                </Switch>
            </div>
        );
    }
}

export default Main;