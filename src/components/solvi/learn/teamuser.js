import React, { Component } from 'react';

class TeamUser extends Component {
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
            </div>
        );
    }
}

export default TeamUser;