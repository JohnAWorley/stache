import React, { Component } from 'react';
import {connect} from 'react-redux';



class Categories extends Component {
    render() {
        return (
            <p>Categories</p>
        )
    }
};

export default connect()(Categories);