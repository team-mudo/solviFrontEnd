import React, { Component } from 'react';
import { connect } from 'react-redux';

import { } from '../../../actions/classFunction';

class RemoveTeam extends Component {
    onDelete() {
        this.props.onChangeClicked(0);
        this.props.removeTeam();
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
    }
}

export default connect(mapStateToProps,{  })(RemoveTeam);