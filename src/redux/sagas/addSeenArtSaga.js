import { put as dispatch, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
// import {call} from 'redux-saga/effects';

function* postPiece(action) {
    try {

        console.log(`in post piece to seen art saga`, action.payload);
        
        yield call(axios.post, '/api/seen', action.payload);

    } catch (error) {
        console.log('Error posting art from add seen art saga:', error);
    }
}
function* addSeenArtWatcher() {
    yield takeLatest('SEEN_ART', postPiece);
}
export default addSeenArtWatcher;