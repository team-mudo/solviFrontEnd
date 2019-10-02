import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userinfo } from '../../actions/userFunction';
import { isTeam } from '../../actions/teamFunction';
import Navigation from './nav/navigation';
import Contents from './contents';

class SolviPage extends Component {
    componentDidMount() {
        const token = this.props.user.token;
        this.props.userinfo(this.props.user.token);
        this.props.isTeam(token,"register");
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

export default connect(mapStateToProps, {userinfo, isTeam})(SolviPage);