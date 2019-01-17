import { put as dispatch, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
// import {call} from 'redux-saga/effects';

function* fetchArt(action) {
    try {


        const artQuery = yield call(axios.get, `/api/art/worktype/${action.payload}`); // get art items
        console.log(`in fetchart saga back with worktype data`, artQuery.data);

        yield dispatch({ type: 'SET_ART', payload: artQuery.data })


    } catch (error) {
        console.log('Error getting art in worktype Search Saga:', error);
    }
}
function* fetchWorkTypeArtWatcher() {
    yield takeLatest('FETCH_WORKTYPE_ART', fetchArt);
}
export default fetchWorkTypeArtWatcher;