


const piece = (state = {}, action) => {

    const defaultState = {
        imageUrl: "",
        title: "",
        metadata: {}
    }
    
    switch (action.type) {
        case 'SET_PIECE':
            if (action.payload.sequences && action.payload.sequences[0].canvases[0]){
            defaultState.imageUrl = action.payload.sequences[0].canvases[0].images[0].resource["@id"]
            } else {
                defaultState.imageUrl = ""
            }

            defaultState.title = action.payload.label ;
            defaultState.metadata = action.payload.metadata ;
           
            return defaultState;
        default:
            return state;
    }
};


export default piece; 