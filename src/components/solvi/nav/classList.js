import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changePage } from '../../../actions/pageFunction';
import { resetinfo2 } from '../../../actions/classFunction';

class ClassList extends Component {
    onChangePage() {
        this.props.resetinfo2();
        this.props.changePage({ page: 0 })
    }
    render() {
        return(
            <div className="classlist">
                <div 
                    onClick={this.onChangePage.bind(this)} 
                    className="subbutton"> WorkSpace </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        page: state.page
    }
}

export default connect(mapStateToProps, { changePage, resetinfo2 })(ClassList);
