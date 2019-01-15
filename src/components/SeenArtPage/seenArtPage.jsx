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
    
    removePieceHandleClick = (id) => {
        this.props.dispatch({ type: 'DELETE_SEEN_PIECE', payload: id });
    }
    
    handleCLick = (id) => {

        console.log(`our individual piece id`, id);


        this.props.dispatch({ type: 'FETCH_SINGLE_PIECE', payload: id });
        this.props.history.push('/singleResult');

    }

    // goBack = () => {
    //     this.props.history.goBack()
    // }
    render(){
        let singlePieceOfSeenArt = this.props.reduxStore.seenArt.map((piece) => {

            console.log(piece.id, 'checking piece id');



            return <div value={piece.object_id} key={piece.object_id} >
                {piece.title}
                <img onClick={() => { this.handleCLick(piece.object_id) }} src={piece.picture_url} alt=""></img>
                <button onClick={() => { this.removePieceHandleClick(piece.id) }}>remove art</button>
                {piece.comment}
                <button>update comment</button>
                {piece.location}
                <button>update location</button>
                {piece.date}
                <button>update date</button>
                {/* <button onClick={this.goBack}>back button</button> */}


            </div>
        })
        return(
            <div>
                {singlePieceOfSeenArt}
            </div>
           
        )
    }
}

export default withRouter(connect(mapStateToProps)(seenArt));