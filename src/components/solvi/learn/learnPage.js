import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getTeam, getTeamUser } from '../../../actions/classFunction';
import { changeTeamPage } from '../../../actions/pageFunction';
import Team from './team';
import TeamUser from './teamuser';
import MakeTeam from './makeTeam';
import RemoveTeam from './removeTeam';
import AddUser from './addUser';

class LearnPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addteam: false,
            removeteam: false,
            adduser: false
        };
    }
    componentDidMount() {
        const { page } = this.props.page;
        const { token } = this.props.user;
        this.props.getTeam(token, page);
    }
    renderTeam() {
        const datas = this.props.team;
        const { page } = this.props.teamPage;
        return _.map(datas, data => {
            return <Team
                key={data.teamId} 
                info={data}
                click={page}
            />
        });
    }
    renderTeamUser() {
        const datas = this.props.teamUser;
        return _.map(datas, (data) => {
            if(data.user === -1){
                return null;
            } else {
                return <TeamUser
                    key={data.user}
                    info={data}
                />
            }
        });
    }
    addTeam() {
        const { addteam } = this.state;
        this.setState({
            ...this.state,
            addteam: !addteam
        })
    }
    removeTeam() {
        const { removeteam } = this.state;
        this.setState({
            ...this.state,
            removeteam: !removeteam,
        });
    }
    addUser() {
        const { adduser } = this.state;
        this.setState({
            ...this.state,
            adduser: !adduser
        });
    }
    render() {
        const { classname } = this.props.page;
        const { page } = this.props.teamPage;
        const { addteam, removeteam, adduser } = this.state;
        return(
            <div className="learnpage">
                { addteam ? <MakeTeam addTeam={this.addTeam.bind(this)} /> : null }
                { removeteam ? <RemoveTeam index={page} removeTeam={this.removeTeam.bind(this)} /> : null }
                { adduser ? <AddUser addUser={this.addUser.bind(this)} /> : null }
                <h1>{classname}</h1>
                <div className="team">
                    <div className="teamList">
                        {this.renderTeam()}
                        <div onClick={this.addTeam.bind(this)} className="teamunit adt">
                            <h4>+</h4>
                        </div>
                    </div>
                    {page === 0
                    ? <div className="description"> 
                        <h2>Design Thinking</h2>
                        <h4>Make Team, Share your Idea!</h4>
                    </div> 
                    :<div className="teamView">
                        <div className="View">
                            <div className="classmanage">

                            </div>
                            <div className="userlist">
                                <div className="usermanage">
                                    {page ? this.renderTeamUser() : null}
                                </div>
                            </div>
                        </div>
                        <div className="removeTeam">
                            <div className="delTeam" onClick={this.removeTeam.bind(this)}>
                                <p>REMOVE TEAM</p>
                            </div>
                            <div className="inviteTeam" onClick={this.addUser.bind(this)}>
                                <p>ADD MEMBER</p>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page,
        team: state.team,
        teamPage: state.teamPage,
        teamUser: state.teamUser
    }
}

export default connect(mapStateToProps, { getTeam, getTeamUser, changeTeamPage })(LearnPage);