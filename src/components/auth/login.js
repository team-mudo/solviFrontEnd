import React, { Component } from 'react';

import LoginForm from './loginForm';

class Login extends Component {
    render() {
        const ex = this.props;
        return(
            <div className={ex.form === 0 ? "form" : "form none"}>
                <h1>로그인</h1>
                <LoginForm />
                <div onClick={() => ex.onChangeForm(1)}> 
                    <p>새 계정 만들기</p> 
                </div>
            </div>
        );
    }
}

export default Login;