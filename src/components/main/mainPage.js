import React, { Component } from 'react';

import MainLeft from './mainLeft';
import MainRight from './mainRight';

class MainPage extends Component {
    render() {
        return(
            <div className="mainpage">
                <MainLeft />
                <MainRight />
            </div>
        );
    }
}

export default MainPage;