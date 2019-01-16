import { put as dispatch, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
// import { call } from 'redux-saga/effects';

function* editComment(action) {
    try {
        console.log('in edit comment saga', action.payload, action.payload.id);
        // yield axios.put(`/api/seen/comment/${action.payload}`);
        yield call(axios.put, `/api/seen/comment`, action.payload);
        yield dispatch({ type: 'GET_SEEN_ART' });
    } catch (error) {
        console.log('Error updating comment', error);
    }
}
function* editCommentWatcher() {
    yield takeLatest('UPDATE_COMMENT', editComment);
}
export default editCommentWatcher;