import React, { Component } from 'react';
import { connect } from 'react-redux';

import plus from '../../img/plus.png';

class SelectContents extends Component {
    componentDidMount
    renderButton() {
        const { auth } = this.props.user;
        if(auth) {
            return(
                <div className="classbox add">
                    <img src={plus} alt="수업 추가" width="50px" height="50px"/>
                </div>
            );
        }
    }
    renderClass() {

    }
    render() {
        return(
            <div className="selectcontents">
                <h1>Project</h1>
                <div className="classList">
                    {this.renderButton()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(SelectContents);