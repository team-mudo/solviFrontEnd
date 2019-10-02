import React, { Component } from 'react';
import { connect } from 'react-redux';

import { delTeam } from '../../../actions/classFunction';
import { changeTeamPage } from '../../../actions/pageFunction';

class RemoveTeam extends Component {
    onDelete() {
        const tid = this.props.index;
        const { token } = this.props.user;
        let data = this.props.team;

        const idx = data.findIndex((item) => { return item.teamId === tid });
        if(idx > -1) data.splice(idx, 1);
    
        this.props.delTeam(token, tid, data);
        this.props.removeTeam();
        this.props.changeTeamPage({page: 0});
    }
    render() {
        return(
            <div className="removeclass re">
                <div>
                    <h2>팀을 삭제하시겠습니까?</h2>
                </div>
                <div className="rebu">
                    <div onClick={this.onDelete.bind(this)} className="field one">
                        <h6>Remove</h6> 
                    </div>
                    <div onClick={this.props.removeTeam} className="field two">
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

export default connect(mapStateToProps,{ delTeam, changeTeamPage })(RemoveTeam);