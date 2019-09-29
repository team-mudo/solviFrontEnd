import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './main/mainPage';
import SolviPage from './solvi/solviPage';

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/solvi" component={SolviPage} />
                        <Route path="/main" component={MainPage} />
                        <Route path="/" component={MainPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;