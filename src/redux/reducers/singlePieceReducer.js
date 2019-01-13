


const piece = (state = {}, action) => {

    const defaultState = {
        imageUrl: "",
        title: "",
        medium: "",
        dimensions: "",
        date: "",
        classification: "",
        people:"",
        technique: "",

    }

    switch (action.type) {
        case 'SET_PIECE':
            if (action.payload.sequences && action.payload.sequences[0].canvases[0]) {
                defaultState.imageUrl = action.payload.sequences[0].canvases[0].images[0].resource["@id"]
            } else {
                defaultState.imageUrl = ""
            }
            if (action.payload.metadata) {
                var medium = action.payload.metadata.filter(function (el) {
                    return el.label === 'Medium';
                });
                defaultState.medium = medium[0].value;
            } else {
                defaultState.medium = "";
            }

            if (action.payload.metadata) {
                var dimensions = action.payload.metadata.filter(function (el) {
                    return el.label === 'Dimensions';
                });
                defaultState.dimensions = dimensions[0].value;
            } else {
                return defaultState.dimensions = "";
            }

            if (action.payload.metadata) {
                var technique = action.payload.metadata.filter(function (el) {
                    return el.label === 'Technique';
                });
                defaultState.technique = technique.value;
            } else {
                return defaultState.technique = "";
            }

            if (action.payload.metadata) {
                var date = action.payload.metadata.filter(function (el) {
                    return el.label === 'Date';
                });
                defaultState.date = date[0].value;
            } else {
                return defaultState.date = "";
            }

            if (action.payload.metadata) {
                var classification = action.payload.metadata.filter(function (el) {
                    return el.label === 'Classification';
                });
                defaultState.classification = classification[0].value;
            } else {
                return defaultState.classification = "";
            }

            if (action.payload.metadata) {
                var people = action.payload.metadata.filter(function (el) {
                    return el.label === 'People';
                });
                defaultState.people = people[0].value[0];
            } else {
                return defaultState.people = "";
            }

            defaultState.title = action.payload.label;


            return defaultState;
        default:
            return state;
    }
};


export default piece; 