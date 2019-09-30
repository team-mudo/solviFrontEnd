import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userinfo } from '../../actions/userFunction';
import Navigation from './nav/navigation';
import Contents from './contents';

class SolviPage extends Component {
    componentDidMount() {
        this.props.userinfo(this.props.user.token);
    }
    render() {
        return(
            <div className="solvipage">
                <Navigation />
                <Contents />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {userinfo})(SolviPage);