import React, { Component } from 'react';

import { connect } from 'react-redux';
import { delClass } from '../../actions/classFunction';
import { changePage } from '../../actions/pageFunction';

class RemoveClass extends Component {
    onDelete() {
        const { cid } = this.props.index;
        const { token } = this.props.user;
        let data = this.props.class;

        const idx = data.findIndex((item) => { return item.cid === cid });
        if(idx > -1) data.splice(idx, 1);
        
        this.props.delClass(token, cid, data);
        this.props.onPopup();
        this.props.changePage({page: -1});
    }
    render() {
        return(
            <div className="removeclass">
                <div>
                    <h2>수업을 삭제하시겠습니까?</h2>
                    <h1>{this.props.index.classname}</h1>
                </div>
                <div className="rebu">
                    <div onClick={this.onDelete.bind(this)} className="field one">
                        <h6>Remove</h6> 
                    </div>
                    <div onClick={this.props.onPopup} className="field two">
                        <h6>Cancel</h6> 
                    </div>
                </div>
            </div> 
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        class: state.class
    }
}

export default connect(mapStateToProps,{ delClass, changePage })(RemoveClass);