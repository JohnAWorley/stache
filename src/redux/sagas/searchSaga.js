import { put as dispatch, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
// import {call} from 'redux-saga/effects';

function* fetchArt(action) {
    try {
    
        const artQuery = yield call(axios.get, `/api/art/${action.payload}`); // get art items
        yield dispatch({ type: 'SET_ART', payload: artQuery.data })
        
        
    } catch (error) {
        console.log('Error getting art in Search Saga:', error);
    }
}
function* fetchArtWatcher() {
    yield takeLatest('FETCH_ART', fetchArt);
}
export default fetchArtWatcher;