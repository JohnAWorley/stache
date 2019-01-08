import React, { Component } from 'react';
import {connect} from 'react-redux';

import FinalDrawer from '../DrawerComponent/Drawer';



class Categories extends Component {
    render() {
        return (
            <div>
            <FinalDrawer />
            <p>Categories</p>
            </div>
        )
    }
};

export default connect()(Categories);