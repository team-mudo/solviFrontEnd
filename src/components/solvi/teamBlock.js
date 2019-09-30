import React, { Component } from 'react';

class TeamBlock extends Component {
    onChangeStatus() {
        const { info } = this.props;
        
    }
    render() {
        const { info } = this.props;
        return(
            <div className="classbox">
                <div className="remove">
                    <p onClick={this.onChangeStatus.bind(this)}>{info.status ? "DEL" : "IN"}</p>
                </div>
                <div className="classtitle">
                    <h2>{info.teamname}</h2>
                </div>
            </div>
        );
    }
}

export default TeamBlock;