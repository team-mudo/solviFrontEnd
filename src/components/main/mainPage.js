import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';

import MainLeft from './mainLeft';
import MainRight from './mainRight';
import SolviPage from '../solvi/solviPage';
import { tokenCheck } from '../../actions/userFunction';

class MainPage extends Component {
    constructor(props) {
        super(props);
        const auth = cookie.get('SOLVIAUTHTOKEN') || 0;
        if(auth) {
            tokenCheck(auth);
        }
    }
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

export default withCookies(connect(mapStateToProps, { tokenCheck })(MainPage));