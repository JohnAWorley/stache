const defaultState = {
    imageUrl: "",
    title: "",
    medium: "",
    dimensions: "",
    date: "",
    classification: "",
    people: "",
    technique: "",
    id: 0,

}


const piece = (state = defaultState, action) => {

    let newPiece = {
        imageUrl: "",
        title: "",
        medium: "",
        dimensions: "",
        date: "",
        classification: "",
        people: "",
        technique: "",
        id: 0,
    }

    switch (action.type) {
        

        case 'SET_PIECE':
            if (action.payload.sequences && action.payload.sequences[0].canvases[0]) {
                 newPiece.imageUrl = action.payload.sequences[0].canvases[0].images[0].resource["@id"]
            } else {
                newPiece.imageUrl = ""
            }
            if (action.payload.metadata && action.payload.metadata.medium) {
                var medium = action.payload.metadata.filter(function (el) {
                    return el.label === 'Medium';
                });
                newPiece.medium = medium[0].value;
            } else {
                newPiece.medium = "";
            }

            if (action.payload.metadata) {
                var dimensions = action.payload.metadata.filter(function (el) {
                    return el.label === 'Dimensions';
                });
                newPiece.dimensions = dimensions[0].value;
            } else {
                return newPiece.dimensions = "";
            }

            // if (action.payload.metadata) {
            //     var technique = action.payload.metadata.filter(function (el) {
            //         return el.label === 'Technique';
            //     });
            //     defaultState.technique = technique.value;
            // } else {
            //     return defaultState.technique = "";
            // }

            if (action.payload.metadata) {
                var date = action.payload.metadata.filter(function (el) {
                    return el.label === 'Date';
                });
                newPiece.date = date[0].value;
            } else {
                newPiece.date = "";
            }

            if (action.payload.metadata) {
                var classification = action.payload.metadata.filter(function (el) {
                    return el.label === 'Classification';
                });
                newPiece.classification = classification[0].value;
            } else {
                newPiece.classification = "";
            }

            if (action.payload.metadata) {
                var people = action.payload.metadata.filter(function (el) {
                    return el.label === 'People';
                });
                newPiece.people = people[0].value[0];
            } else {
                newPiece.people = "";
            }

            if (action.payload) {
                var id = parseInt((action.payload["@id"].substring(52)))
                newPiece.id = id;
            } else {
                newPiece.id = 0;
            }

            newPiece.title = action.payload.label;
            


            return newPiece;
        default:
            return state;
    }
};


export default piece; 