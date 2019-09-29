import React, { Component } from 'react';

import Login from '../auth/login';
import Register from '../auth/register';

class MainRight extends Component {
    constructor(props) {
        super(props);
        this.state = { form: 0 }
    }
    onChangeForm(next) {
        this.setState({ form: next })
    }
    render() {
        return(
            <div className="mainright">
                <Login 
                    form={this.state.form}
                    onChangeForm={(next) => this.onChangeForm(next)}
                />
                <Register 
                    form={this.state.form}
                    onChangeForm={(next) => this.onChangeForm(next)}
                />
            </div>
        );
    }
}

export default MainRight;