import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxStore => {
    return {
        piece: reduxStore.piece
    }
}


class SingleResultPage extends Component{
    componentDidUpdate(){
        
       
    }
    render(){
        console.log(this.props.piece.imageUrl);
        
        return(
            <img src={this.props.piece.imageUrl} alt=""></img>
        )
        
    }
}

export default connect(mapStateToProps)(SingleResultPage);