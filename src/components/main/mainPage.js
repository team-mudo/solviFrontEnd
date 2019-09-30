import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainLeft from './mainLeft';
import MainRight from './mainRight';
import SolviPage from '../solvi/solviPage';

class MainPage extends Component {
    onCheckUser(token) {
        return(
            <div>
                {!token
                    ? <div className="mainpage">
                        <MainLeft />
                        <MainRight />
                      </div>
                    : <SolviPage />
    
                }
            </div>
        );
    }
    render() {
        const token = this.props.user.token;
        return(
            <div>
                {this.onCheckUser(token)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(MainPage);