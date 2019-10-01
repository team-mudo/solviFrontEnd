import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getTeam, getTeamUser } from '../../../actions/classFunction';
import Team from './team';
import TeamUser from './teamuser';

class LearnPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 0
        };
    }
    componentDidMount() {
        const { page } = this.props.page;
        const { token } = this.props.user;
        this.props.getTeam(token, page);
    }
    onChangeClicked(next) {
        const { token } = this.props.user;
        this.setState({...this.state, clicked: next });
        this.props.getTeamUser(token, next);
    }
    renderTeam() {
        const datas = this.props.team;
        const { clicked } = this.state;
        return _.map(datas, data => {
            return <Team
                key={data.teamId} 
                info={data}
                click={clicked}
                onChangeClicked={(next) => this.onChangeClicked(next)}
            />
        });
    }
    renderTeamUser() {
        const datas = this.props.teamUser;
        return _.map(datas, data => {
            return <TeamUser
                key={data.user}
                info={data}
            />
        });
    }
    render() {
        const { classname } = this.props.page;
        const { clicked } = this.state;
        return(
            <div className="learnpage">
                <h1>{classname}</h1>
                <div className="team">
                    <div className="teamList">
                        {this.renderTeam()}
                        <div className="teamunit adt">
                            <h4>+</h4>
                        </div>
                    </div>
                    <div className="teamView">
                        <div>
                            {clicked ? this.renderTeamUser() : null}
                        </div>
                        <div>
                            
                        </div>
                    </div>
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
        teamUser: state.teamUser
    }
}

export default connect(mapStateToProps, { getTeam, getTeamUser })(LearnPage);