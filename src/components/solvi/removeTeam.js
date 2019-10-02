import React, { Component } from 'react';

import { connect } from 'react-redux';

import { delTeam, getMyTeam } from '../../actions/teamFunction'

class RemoveTeam extends Component {
    onDelete() {
        const { team } = this.props.index;
        const { token } = this.props.user;
        this.props.delTeam(token, team);
        this.props.onPopup();
        this.props.getMyTeam(token);
    }
    render() {
        return(
            <div className="removeclass">
                <div>
                    <h2>팀을 삭제하시겠습니까?</h2>
                    <h1>{this.props.index.teamname}</h1>
                </div>
                <div className="rebu">
                    <div onClick={this.onDelete.bind(this)} className="field one">
                        <h6>Remove</h6> 
                    </div>
                    <div onClick={this.props.onPopup} className="field two">
                        <h6>Cancel</h6> 
                    </div>
                </div>
            </div> 
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        team: state.team
    }
}

export default connect(mapStateToProps,{ delTeam, getMyTeam })(RemoveTeam);