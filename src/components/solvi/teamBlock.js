import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePage } from '../../actions/pageFunction';

import RemoveTeam from './removeTeam';
import { getTeamUser } from '../../actions/classFunction';

class TeamBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false
        };
    }
    onPopup() {
        this.setState({
            popup: !this.state.popup
        });
    }
    loadPage() {
        const { info } = this.props;
        const { token } = this.props.user;
        this.props.changePage({
            page: info.team,
            teamname: info.teamname
        });
        this.props.getTeamUser(token, info.team);
    }
    render() {
        const { info } = this.props;
        const pop = this.state.popup;
        return(
            <div className="classbox">
                <div className="remove">
                    <p onClick={this.onPopup.bind(this)}>DEL</p>
                </div>
                <div className="classtitle" onClick={this.loadPage.bind(this)}>
                    <h2>{info.teamname}</h2>
                </div>
                {pop
                    ? <RemoveTeam index={info} onPopup={this.onPopup.bind(this)}/>
                    : null
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {changePage, getTeamUser})(TeamBlock);