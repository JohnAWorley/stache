import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }
}


class SingleResultPage extends Component{
    render(){
        return(
            <div></div>
        )
    }
}

export default connect(mapStateToProps)(SingleResultPage);