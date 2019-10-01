import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from '../../../actions/userFunction';
import { resetinfo } from '../../../actions/classFunction';
import ClassList from './classList';
import image from '../../../img/default_img.png';

class Navigation extends Component {
    onlogout() {
        resetinfo();
        this.props.logout((path) => {
            this.props.history.push(`${path}`);
        });
    }
    render() {
        const ex = this.props.user;
        if(!ex.email) {
            return <div>loading</div>
        }
        return(
            <div className="navigation">
                <div className="navlogo">
                    <h1>SOLVI</h1>
                </div>
                <div className="userimage">
                    <img src={image} alt={"USER_IMAGE"} height="170" width="170" />
                </div>
                <div className="userprofile">
                    <h4>{ex.nickname}</h4>
                    <p>({ex.email})</p>
                </div>
                <ClassList />
                <div className="subbutton logout" onClick={this.onlogout.bind(this)}>
                    <div>LOGOUT</div>
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

export default withRouter(connect(mapStateToProps, { logout, resetinfo })(Navigation));