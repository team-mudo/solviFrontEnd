import React, { Component } from 'react';

class TeamBlock extends Component {
    onChangeStatus() {
        const { info } = this.props;
        if(!info.status) {
            console.log("join");
        } else {
            console.log("out");
        }
    }
    render() {
        const { info } = this.props;
        return(
            <div className="classbox">
                <div className="remove">
                    <p 
                        onClick={this.onChangeStatus.bind(this)}
                        className={info.status ? "" : "notin"}
                    >
                        {info.status ? "OUT" : "IN"}
                    </p>
                </div>
                <div className="classtitle">
                    <h2>{info.teamname}</h2>
                </div>
            </div>
        );
    }
}

export default TeamBlock;