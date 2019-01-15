import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }
}

class seenArt extends Component{
    componentDidMount(){
        this.props.dispatch({
            type: 'GET_SEEN_ART'
        })
    }
    
    hey = () => {
        console.log(this.props.reduxStore.seenArt);
        
    }
    render(){
        return(
            <div>
                
            </div>
           
        )
    }
}

export default withRouter(connect(mapStateToProps)(seenArt));