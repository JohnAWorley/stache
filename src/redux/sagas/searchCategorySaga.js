import { put as dispatch, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
// import {call} from 'redux-saga/effects';

function* fetchArt(action) {
    try {


        const artQuery = yield call(axios.get, `/api/art/category/${action.payload}`); // get art items
        console.log(`in fetchart category saga back with data`, artQuery.data);

        yield dispatch({ type: 'SET_ART', payload: artQuery.data })


    } catch (error) {
        console.log('Error getting category art in Search Saga:', error);
    }
}
function* fetchArtistWatcher() {
    yield takeLatest('FETCH_ARTIST_ART', fetchArt);
}
export default fetchArtistWatcher;