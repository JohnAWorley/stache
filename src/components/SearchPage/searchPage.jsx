import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'


const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }
} 


class Search extends Component {

    
    state = {
        search: ''
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({ type: 'FETCH_ART', payload: this.state.search })
        this.props.history.push('/searchResults')
        
        
    }

    render(){
        return(
            <div>
            <p>search page</p>
                <input onChange={this.handleChange} type="text" placeholder="search title" />
                <button onClick={this.handleClick}>Submit Search</button>
            </div>
        )
    }
};

export default withRouter(connect(mapStateToProps)(Search));