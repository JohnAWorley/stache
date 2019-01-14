import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxStore => {
    return {
        piece: reduxStore.piece
    }
}


class SingleResultPage extends Component {
    componentDidUpdate() {
        let string = this.props.piece.all["@id"]
        console.log(parseInt((string).substring(52)));
        

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


                <textarea></textarea>
                <button>save comment</button>
                <br></br>
                <button>add to seen list</button>
                <br></br>
                <button>add to want to see list</button>
                <br></br>
                <button>back</button>

            </div>
        )

    }
}

export default connect(mapStateToProps)(SingleResultPage);