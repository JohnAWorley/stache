import { put as dispatch, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
// import {call} from 'redux-saga/effects';

function* fetchArt(action) {
    try {


        const artQuery = yield call(axios.get, `/api/art/culture/${action.payload}`); // get art items
        console.log(`in fetchart saga back with culture data`, artQuery.data);

        yield dispatch({ type: 'SET_ART', payload: artQuery.data })


    } catch (error) {
        console.log('Error getting art in culture Search Saga:', error);
    }
}
function* fetchCultureArtWatcher() {
    yield takeLatest('FETCH_CULTURE_ART', fetchArt);
}
export default fetchCultureArtWatcher;