import React, {Component} from 'react';
import { connect } from 'react-redux';



class Search extends Component {
    render(){
        return(
            <p>search page</p>
        )
    }
};

export default connect()(Search);