import { put as dispatch, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
// import {call} from 'redux-saga/effects';

function* getArt() {
    try {


        const setSeen = yield axios.get('/api/seen');  // get seen art items
        console.log(`in get seen art saga back with data`, setSeen.data);

        yield dispatch({ type: 'SET_SEEN_ART', payload: artQuery.data })


    } catch (error) {
        console.log('Get seen art saga problem:', error);
    }
}
function* getSeenArtWatcher() {
    yield takeLatest('GET_SEEN_ART', getArt);
}
export default getSeenArtWatcher;