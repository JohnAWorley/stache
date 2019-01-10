import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }
}





class SearchResults extends Component {

    state = {
        search: ''
    }

    componentDidUpdate() {
        console.log(`logging our redux state`, this.props.reduxStore.search);

    } // checking what our updated redux state is 

    handleCLick = (id) => {
    
        console.log(`our individual piece id`, id);
        
        
        this.props.dispatch({ type: 'FETCH_SINGLE_PIECE', payload: id });
        this.props.history.push('/singleResult');
        

    }

    render() {
        let singlePieceOfResults = this.props.reduxStore.search.map((piece) => {


            return <div value = {piece.id} key={piece.id} onClick= {() => {this.handleCLick(piece.id)}}> 
                        {piece.title} 
                        <img src={piece.primaryimageurl} alt=""></img>
                        
                        
                    </div>




        })
        return (
            <div>
                {singlePieceOfResults}
            </div>
        )
    }

}

export default withRouter(connect(mapStateToProps)(SearchResults));