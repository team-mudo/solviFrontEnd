import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeTeam } from '../../../actions/classFunction';

class MakeTeam extends Component {
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
        const result = {
            cid: this.props.page.page,
            teamname: values.teamname,
            token: this.props.user.token
        }
        this.props.makeTeam(result);
        this.props.addTeam();
    }
    render() {
        const { handleSubmit } = this.props;
        return(
            <div className="createclass tt">
                <h1>팀 생성</h1>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field 
                        name="teamname"
                        label="text"
                        component={this.renderField}
                    />
                    <button className="field button" type="submit">생성하기</button>
                </form>  
                <div onClick={this.props.addTeam}>취소</div>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    if(!values.teamname) { errors.teamname="Enter a teamname!"; }
    return errors;
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

export default reduxForm({
    validate,
    form: 'MakeTeam'
})(
    withRouter(connect(mapStateToProps, { makeTeam })(MakeTeam))
);