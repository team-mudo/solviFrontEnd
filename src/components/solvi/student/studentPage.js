import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import _ from 'lodash';

import { connect } from 'react-redux';
import TeamUser from '../learn/teamuser';

class StudentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            endpoint: "192.168.139.132:8080"
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    componentDidMount() {
        const { page } = this.props.page;
        const socket = socketIOClient(this.state.endpoint);
        socket.on(``, () => {

        });
    }
    onInputChange(event){
        this.setState({...this.state, comment : event.target.value});
    }
    onFormSubmit(event){
        event.preventDefault();
        const socket = socketIOClient(this.state.endpoint);
        socket.emit('', this.state.comment);
        this.setState({...this.state, comment: ''});
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
    render() {
        const { teamname } = this.props.page;
        console.log(this.state.comment);
        return(
        <div className="learnpage">
            <h1>{ teamname }</h1>
            <div className="team">
                <div className="teamView">
                    <div className="View">
                        <div className="classmanage">

                        </div>
                        <div className="userlist">
                            <div className="usermanage">
                                {this.renderTeamUser()}
                            </div>
                        </div>
                    </div>
                    <div className="addComment">
                        <form onSubmit={this.onFormSubmit}>
                            <input 
                                placeholder="Share your Idea!"
                                className="inputcomment"
                                value={this.state.comment}
                                onChange = {this.onInputChange} 
                            />
                            <button type="submit" className="submitcomment"></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        page: state.page,
        teamUser: state.teamUser
    }
}

export default connect(mapStateToProps)(StudentPage);