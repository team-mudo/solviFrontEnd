import React, { Component } from 'react';
import { connect } from 'react-redux';

import SelectContents from './selectContents';

class Contents extends Component {
    render() {
        const { page } = this.props.page;
        return(
            <div className="contents">
                {page === 0 
                    ? <SelectContents />
                    : <SelectContents page={page} />
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

export default connect(mapStateToProps)(Contents);