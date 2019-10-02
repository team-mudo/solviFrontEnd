import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import plus from '../../img/plus.png';
import ClassBlock from './classBlock';
import TeamBlock from './teamBlock';
import CreateClass from './createClass';
import { getMyClass } from '../../actions/classFunction';
import { getMyTeam } from '../../actions/teamFunction';

class SelectContents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false
        }
    }
    renderButton() {
        const { auth } = this.props.user;
        if(auth) {
            return(
                <div className="classbox add" onClick={this.onPopup.bind(this)}>
                    <img src={plus} alt="수업 추가" width="50px" height="50px"/>
                </div>
            );
        }
    }
    renderClass() {
        const { auth, token } = this.props.user;
        if(auth) {
            const datas = this.props.class;
            this.props.getMyClass(token);
            if( datas.length === 0 ) {
                return <div>진행중인 수업이 없습니다.</div>
            } else {
                return _.map(datas, data => {
                    return <ClassBlock key={data.cid} info={data} />
                });
            }
        } else {
            const datas = this.props.team;
            this.props.getMyTeam(token);
            if(datas.length === 0) {
                return <div>진행중인 수업이 없습니다.</div>
            } else {
                return _.map(datas, data => {
                    return <TeamBlock key={data.team} info={data} />
                });
            }
        }
    }
    onPopup() {
        this.setState({
            popup: !this.state.popup
        });
    }
    render() {
        const pop = this.state.popup;
        return(
            <div className="selectcontents">
                <h1>Project</h1>
                <div className="classList">
                    {this.renderButton()}
                    {this.renderClass()}
                    {pop 
                        ? <CreateClass onPopup={this.onPopup.bind(this)} /> 
                        : null
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        class: state.class,
        team: state.team
    }
}

export default connect(mapStateToProps, { getMyClass, getMyTeam })(SelectContents);