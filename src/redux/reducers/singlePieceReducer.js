const defaultState = {
    imageUrl: "",
    title: "",
    
}

const piece = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PIECE':



            return action.payload;
        default:
            return state;
    }
};


export default piece; 