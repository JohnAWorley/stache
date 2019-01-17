import { put as dispatch, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
// import { call } from 'redux-saga/effects';

function* editLocation(action) {
    try {
        console.log('in edit location saga', action.payload, action.payload.id);
        // yield axios.put(`/api/seen/comment/${action.payload}`);
        yield call(axios.put, `/api/seen/location`, action.payload);
        yield dispatch({ type: 'GET_SEEN_ART' });
    } catch (error) {
        console.log('Error updating location', error);
    }
}
function* editLocationWatcher() {
    yield takeLatest('UPDATE_LOCATION', editLocation);
}
export default editLocationWatcher;