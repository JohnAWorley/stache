const seenArt = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEEN_ART':
            return action.payload; 
        default:
            return state;
    }
};


export default seenArt;