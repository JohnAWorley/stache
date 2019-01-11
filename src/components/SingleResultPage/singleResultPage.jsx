import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxStore => {
    return {
        piece: reduxStore.piece
    }
}


class SingleResultPage extends Component {
    componentDidUpdate() {
        console.log(`metadata`, this.props.piece.metadata);
        

    }
    render() {

        
        if (this.props.piece.metadata) {
            var date = this.props.piece.metadata.filter(function (el) {
                return el.label === 'Date';
            });
        }

        if (this.props.piece.metadata) {
            var classification = this.props.piece.metadata.filter(function (el) {
                return el.label === 'Classification';
            });
        }
        
      
        console.log(date);
        
        return (
            <div>
                
                <h1>{this.props.piece.title}</h1>
                <img src={this.props.piece.imageUrl} alt=""></img>
                {date && <p>{date[0].value}</p>}
                {classification && <p>{classification[0].value}</p>}
            </div>
        )

    }
}

export default connect(mapStateToProps)(SingleResultPage);