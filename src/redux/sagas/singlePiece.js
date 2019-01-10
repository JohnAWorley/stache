import { put as dispatch, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
// import {call} from 'redux-saga/effects';

function* getPiece(action) {
    try {


        const singlePieceQuery = yield call(axios.get, `/api/piece/${action.payload}`); // get pieces 
        console.log(`in fetchpiece saga back with data`, singlePieceQuery.data);

        yield dispatch({ type: 'SET_PIECE', payload: singlePieceQuery.data })


    } catch (error) {
        console.log('Error getting art in single piece  Saga:', error);
    }
}
function* singlePieceWatcher() {
    yield takeLatest('FETCH_SINGLE_PIECE', getPiece);
}
export default singlePieceWatcher;