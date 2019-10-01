import React, { Component } from 'react';

class Team extends Component {
    render() {
        const { teamname, teamId } = this.props.info;
        const { click } = this.props;
        return(
            <div 
                className={click===teamId ? "teamunit clicked" : "teamunit"} 
                onClick={() => this.props.onChangeClicked(teamId)}
            >
                <h3>{teamname}</h3>
            </div>
        );
    }
}

export default Team;