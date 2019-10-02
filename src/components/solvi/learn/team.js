import React, { Component } from 'react';

import { connect } from 'react-redux';

import { changeTeamPage } from '../../../actions/pageFunction';
import { getTeamUser } from '../../../actions/classFunction';

class Team extends Component {
    onChangeTeam() {
        const { teamId } = this.props.info;
        const { token } = this.props.user;
        this.props.changeTeamPage({page: teamId});
        this.props.getTeamUser(token, teamId);
    }
    render() {
        const { teamname, teamId } = this.props.info;
        const { page } = this.props.teamPage;
        return(
            <div 
                className={page===teamId ? "teamunit clicked" : "teamunit"} 
                onClick={this.onChangeTeam.bind(this)}
            >
                <h3>{teamname}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        teamPage: state.teamPage
    }
}

export default connect(mapStateToProps, { changeTeamPage, getTeamUser } )(Team);