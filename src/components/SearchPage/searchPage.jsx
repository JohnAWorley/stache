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
        title: '',
        artist: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClickTitle = () => {
        this.props.dispatch({ type: 'FETCH_TITLE_ART', payload: this.state.title })
        this.props.history.push('/searchResults')
        
        
    }

    handleClickArtist= () => {
        this.props.dispatch({ type: 'FETCH_ARTIST_ART', payload: this.state.artist })
        this.props.history.push('/searchResults')
    }

    render(){
        return(
            <div>
            <p>search page</p>
                <input onChange={this.handleChange} name ="title" type="text" placeholder="search title" />
                <button onClick={this.handleClickTitle}>Submit Search</button>
                <input onChange={this.handleChange} name="artist" type="text" placeholder="search artist" />
                <button onClick={this.handleClickArtist}>Submit Search</button>
            </div>
        )
    }
};

export default withRouter(connect(mapStateToProps)(Search));