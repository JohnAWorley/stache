const defaultState = {
    imageUrl: "",
    title: "",

}

const piece = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PIECE':
            if (action.payload.sequences && action.payload.sequences[0].canvases[0]){
            defaultState.imageUrl = action.payload.sequences[0].canvases[0].images[0].resource["@id"]
            } else {
                defaultState.imageUrl = ""
            }

            defaultState.title = ""

            return defaultState;
        default:
            return state;
    }
};


export default piece; 