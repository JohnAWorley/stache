import React, {Component} from 'react';
import { connect } from 'react-redux';


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
        console.log(this.state.search);
        
    }

    render(){
        return(
            <div>
            <p>search page</p>
                <input onChange={this.handleChange} type="text" placeholder="search image" />
                <button onClick={this.handleClick}>Submit Search</button>
            </div>
        )
    }
};

export default connect(mapStateToProps)(Search);