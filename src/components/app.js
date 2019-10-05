import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './main/mainPage';

class App extends Component {
    render() {
        return(
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/main" component={MainPage} />
                            <Route path="/" component={MainPage} />
                        </Switch>
                    </div>
                </BrowserRouter>
        );
    }
}

export default withCookies(App);