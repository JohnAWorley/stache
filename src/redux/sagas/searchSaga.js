import { put as dispatch, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
// import {call} from 'redux-saga/effects';

function* fetchArt(action) {
    try {
        const artQuery = yield call(axios.get, `/api/art/${action.payload}`); // get shelf item
        yield dispatch({ type: 'SET_ART', payload: artQuery.data })
    } catch (error) {
        console.log('Error getting art in get Search Saga:', error);
    }
}
function* fetchShelfWatcher() {
    yield takeLatest('FETCH_ART', fetchArt);
}
export default fetchShelfWatcher;