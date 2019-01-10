import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }
}


class SingleResultPage extends Component{
    componentDidUpdate(){
        
       
    }
    render(){
        // console.log(`single result page drilling in`, this.props.reduxStore.piece.sequences[0].canvases[0].images[0].resource["@id"]);
        // let image = '';
        if (this.props.reduxStore.piece.sequences && this.props.reduxStore.piece.sequences[0].canvases[0]){
        //  image = this.props.reduxStore.piece.sequences[0].canvases[0].images[0].resource["@id"];
            return <img src={this.props.reduxStore.piece.sequences[0].canvases[0].images[0].resource["@id"]} alt=""></img>
        } else {
            
           return <div></div>
        }
        
    }
}

export default connect(mapStateToProps)(SingleResultPage);