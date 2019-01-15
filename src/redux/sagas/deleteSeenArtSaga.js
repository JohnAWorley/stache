import { put as dispatch, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
// import { call } from 'redux-saga/effects';

function* deleteItem(action) {
    try {
        console.log('in delete seen piece saga', action.payload);
        yield axios.delete(`/api/seen/${action.payload}`);
        yield dispatch({ type: 'GET_SEEN_ART' });
    } catch (error) {
        console.log('Error deleting seen piece', error);
    }
}
function* deleteSeenWatcher() {
    yield takeLatest('DELETE_SEEN_PIECE', deleteItem);
}
export default deleteSeenWatcher;