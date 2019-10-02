import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changePage } from '../../actions/pageFunction';
import SelectContents from './selectContents';
import LearnPage from './learn/learnPage';
import StudentPage from './student/studentPage';

class Contents extends Component {
    renderPage() {
        const auth = this.props.user.auth;
        if(auth === 1) {
            return <LearnPage />
        } else {
            return <StudentPage />
        }
    }
    render() {
        const { page } = this.props.page;
        if( page === -1) {
            this.props.changePage({page: 0});
            return <div>Loading...</div>;
        }
        return(
            <div className="contents">
                {page === 0 
                    ? <SelectContents />
                    : this.renderPage(page)
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

export default connect(mapStateToProps, { changePage })(Contents);