const search = (state = [], action) => {
    switch (action.type) {
        case 'SET_ART':
            return action.payload.records;
        default: 
            return state;
    }
};


export default search;