import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = reduxStore => {
    return {
        piece: reduxStore.piece
    }
}


class SingleResultPage extends Component {

    componentDidUpdate() {
        console.log(this.state);
        
    }

    state = {
        id: 0,
        comment: "",
        title: "",
        picture: 0,

    }

    handleChange = (event) => {
        console.log('changing our comment', event)
        this.setState({
            comment: event.target.value

        });
    }

    seenHandleClick = () => {
       
         
       let payload =  {
            id: this.props.piece.id,
            comment: this.state.comment,
            title: this.props.piece.title,
            picture: this.props.piece.imageUrl
        };

       console.log(`making sure that payload is here`, payload);
       
        this.props.dispatch({ type: 'SEEN_ART', payload: payload });
        
    }
    goBack = () => {
        this.props.history.goBack()
    }

    render() {

    
        
        
        return (
            <div>
                
                <h1>{this.props.piece.title}</h1>
                <img src={this.props.piece.imageUrl} alt=""></img>
                <p>{this.props.piece.date}</p>
                <p>{this.props.piece.classification}</p>
                <p>{this.props.piece.people}</p>
                <p>{this.props.piece.medium}</p>
                <p>{this.props.piece.dimensions}</p>
                <p>{this.props.piece.technique}</p>

                <p>{this.state.comment}</p>
                <input onChange={this.handleChange}></input>
                <button>save comment</button>
                <br></br>
                <button onClick={this.seenHandleClick}> add to seen list</button>
                <br></br>
                <button>add to want to see list</button>
                <br></br>
                <button onClick={this.goBack}>back</button>

            </div>
        )

    }
}

export default withRouter(connect(mapStateToProps)(SingleResultPage));