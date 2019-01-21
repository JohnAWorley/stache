import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './searchPage.css';





const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }
}


class Search extends Component {


    state = {
        title: '',
        artist: '',
        categories: '',
        culture: '',
        worktype: '',

    }

    handleChange = (event) => {
        console.log(this.state.culture);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClickTitle = () => {
        this.props.dispatch({ type: 'FETCH_TITLE_ART', payload: this.state.title })
        this.props.history.push('/searchResults')


    }

    handleClickArtist = () => {
        this.props.dispatch({ type: 'FETCH_ARTIST_ART', payload: this.state.artist })
        this.props.history.push('/searchResults')
    }

    handleClickCategories = () => {
        this.props.dispatch({ type: 'FETCH_ARTIST_ART', payload: this.state.categories })
        this.props.history.push('/searchResults')
    }

    handleClickCulture = () => {
        this.props.dispatch({ type: 'FETCH_CULTURE_ART', payload: this.state.culture })
        this.props.history.push('/searchResults')
    }

    handleClickWorkType = () => {
        this.props.dispatch({ type: 'FETCH_WORKTYPE_ART', payload: this.state.worktype })
        this.props.history.push('/searchResults')
    }

    render() {
        return (
            <div className='majorDiv'>
                <p>Search</p>
                <div >
                    <input id='input' onChange={this.handleChange} name="title" type="text" placeholder="search by title" />
                    <button  id= 'button' onClick={this.handleClickTitle}>Submit Search</button>
                </div>
                <div>
                <input id='input' onChange={this.handleChange} name="artist" type="text" placeholder="search by artist" />
                <button id='button' onClick={this.handleClickArtist}>Submit Search</button>
                </div>
                <div>
                <input id='input' onChange={this.handleChange} name="categories" type="text" placeholder="search by cateogry" />
                <button id='button' onClick={this.handleClickCategories}>Submit Search</button>
                </div>
                <div>
                <input id='input' onChange={this.handleChange} name="culture" type="text" placeholder="search by culture" />
                <button id='button' onClick={this.handleClickCulture}>Submit Search</button>
                </div>
                <input id='input' onChange={this.handleChange} name="worktype" type="text" placeholder="search by work type" />
                <button id='button' onClick={this.handleClickWorkType}>Submit Search</button>
            </div>
        )
    }
};

export default withRouter(connect(mapStateToProps)(Search));