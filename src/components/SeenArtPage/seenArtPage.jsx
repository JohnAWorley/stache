import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import DatePickers from '../DatePicker/datePicker'

import './seenArtPage.css'

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }
}

class seenArt extends Component {

    state = {
        location: '',
        comment: '',
        eventDate: '',
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_SEEN_ART'
        })
    }

    handleCLick = (id) => {
        console.log(`our individual piece id`, id);
        this.props.dispatch({ type: 'FETCH_SINGLE_PIECE', payload: id });
        this.props.history.push('/singleResult');
    }

    removePieceHandleClick = (id) => {
        this.props.dispatch({ type: 'DELETE_SEEN_PIECE', payload: id });
    }

    updateCommentHandleClick = (id) => {
        this.props.dispatch({ type: 'UPDATE_COMMENT', payload: { id: id, comment: this.state.comment } });
    }

    updateLocationHandleClick = (id) => {
        this.props.dispatch({ type: 'UPDATE_LOCATION', payload: { id: id, comment: this.state.location } });
    }

    updateDateHandleClick = (id) => {
        this.props.dispatch({ type: 'UPDATE_DATE', payload: { id: id, comment: this.state.eventDate } });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);

    }

    handleInputChangeForDate = propertyName => event => {
        console.log('in handle imput change');

        this.setState({
            [propertyName]: event.target.value,
        });
        console.log(this.state);

    }



    goBack = () => {
        this.props.history.goBack()
    }
    render() {
        let singlePieceOfSeenArt = this.props.reduxStore.seenArt.map((piece) => {
            console.log(`checking for piece.id `, piece);


            return <div value={piece.object_id} key={piece.object_id} >
                <h2 className="text" >{piece.title}</h2>
                <div className="infoDiv">
                    <img className="image" onClick={() => { this.handleCLick(piece.object_id) }} src={piece.picture_url} alt=""></img>
                    <ul >
                        <p className="comment">{piece.comment} </p>
                        <p> {piece.location} </p>
                        <p> {piece.date} </p>
                    </ul>
                </div>
                <br></br>
                <button onClick={() => { this.removePieceHandleClick(piece.id) }}>remove art</button>
                <input onChange={this.handleChange} name="comment"></input>
                <button onClick={() => { this.updateCommentHandleClick(piece.piece_id) }}>update comment</button>

                <input onChange={this.handleChange} name="location"></input>
                <button onClick={() => { this.updateLocationHandleClick(piece.id) }}>update location</button>

                <input
                    label=""
                    placeholder="Event Date"
                    type="date"
                    margin="normal"
                    value={this.state.eventDate}
                    onChange={this.handleInputChangeForDate('eventDate')}
                    //    className={classes.inputStyles}
                    variant="outlined"
                />
                <button onClick={() => { this.updateDateHandleClick(piece.id) }}>update date</button>



            </div>
        })
        return (
            <div>
                {singlePieceOfSeenArt}
                <button className='backButton' onClick={this.goBack}>back</button>
            </div>

        )
    }
}

export default withRouter(connect(mapStateToProps)(seenArt));