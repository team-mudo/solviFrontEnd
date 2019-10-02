import React, { Component } from 'react';
import { connect } from 'react-redux';

import { delUser } from '../../../actions/classFunction';
import { changeTeamPage } from '../../../actions/pageFunction';

class TeamUser extends Component {
    outUser() {
        const { token } = this.props.user;
        const uid = this.props.info.uid;
        const tid = this.props.teamPage.page;
        let data = this.props.teamUser;

        const idx = data.findIndex((item) => { return item.uid === uid });
        if(idx > -1) data.splice(idx, 1);

        this.props.delUser(tid, uid, token, data);
        this.props.changeTeamPage({page: tid});
    }
    render() {
        const info = this.props.info;
        return(
            <div className={info.status? "teamuser" : "teamuser yet"}>
                <div className="userinfo">
                    <div className="usernick">
                        {info.nickname}
                    </div>
                    <div className="useremail">
                        {info.email}
                    </div>
                </div>
                <div className="deluser" onClick={this.outUser.bind(this)}>
                    <div>내보내기</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        teamPage: state.teamPage,
        teamUser: state.teamUser
    }
}

export default connect(mapStateToProps, { delUser, changeTeamPage })(TeamUser);