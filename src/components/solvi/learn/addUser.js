import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { inviteUser } from '../../../actions/classFunction';

class AddUser extends Component {
    renderField(field) {
        return(
            <div>
                <input 
                    className="field"
                    type={field.label}
                    {...field.input}
                    placeholder={field.meta.error}
                />
            </div>
        );
    }
    onSubmit(values) {
        const { token } = this.props.user; 
        const { page } = this.props.teamPage;
        const result = {
            email: values.email,
            token: token,
            tid: page
        }
        this.props.inviteUser(result);
        this.props.addUser();
    }
    render() {
        const { handleSubmit } = this.props;
        return(
            <div className="createclass tt">
                <h1>팀 초대하기</h1>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field 
                        name="email"
                        label="text"
                        component={this.renderField}
                    />
                    <button className="field button" type="submit">보내기</button>
                </form>  
                <div onClick={this.props.addUser}>취소</div>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    if(!values.email) { errors.email="Enter a email!"; }
    return errors;
}

function mapStateToProps(state) {
    return {
        user: state.user,
        teamPage: state.teamPage
    }
}

export default reduxForm({
    validate,
    form: 'AddUser'
})(
    withRouter(connect(mapStateToProps, { inviteUser })(AddUser))
);