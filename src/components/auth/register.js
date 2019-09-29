import React, { Component } from 'react';

import RegisterForm from './registerForm';

class Register extends Component {
    render() {
        const ex = this.props;
        return(
            <div className={ex.form === 1 ? "form" : "form none"}>
                <h1>회원가입</h1>
                <RegisterForm onChangeForm={(next) => ex.onChangeForm(next)} />
                <div onClick={() => ex.onChangeForm(0)}> 
                    <p>뒤로 가기</p> 
                </div>
            </div>
        );
    }
}

export default Register;