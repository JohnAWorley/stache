const search = (state = [], action) => {
    switch (action.type) {
        case 'SET_ART':
            return action.payload.records; // need to set this up outside of the search  switch. this will allow the search to be saved.
        default: 
            return state;
    }
};


export default search;