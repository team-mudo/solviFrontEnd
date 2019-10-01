import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changePage } from '../../actions/pageFunction';
import SelectContents from './selectContents';
import LearnPage from './learn/learnPage';

class Contents extends Component {
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
                    : <LearnPage />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        page: state.page
    }
}

export default connect(mapStateToProps, { changePage })(Contents);