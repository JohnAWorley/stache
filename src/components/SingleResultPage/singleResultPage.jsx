import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxStore => {
    return {
        piece: reduxStore.piece
    }
}


class SingleResultPage extends Component {
    componentDidUpdate() {
    
        console.log(this.props.piece.technique);
        

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
              


            </div>
        )

    }
}

export default connect(mapStateToProps)(SingleResultPage);