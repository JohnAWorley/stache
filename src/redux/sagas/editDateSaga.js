import { put as dispatch, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
// import { call } from 'redux-saga/effects';

function* editDate(action) {
    try {
        console.log('in edit date saga', action.payload, action.payload.id);
        // yield axios.put(`/api/seen/comment/${action.payload}`);
        yield call(axios.put, `/api/seen/date`, action.payload);
        yield dispatch({ type: 'GET_SEEN_ART' });
    } catch (error) {
        console.log('Error updating date', error);
    }
}
function* editDateWatcher() {
    yield takeLatest('UPDATE_DATE', editDate);
}
export default editDateWatcher;