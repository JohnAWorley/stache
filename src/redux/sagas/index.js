import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';

import searchTitleSaga from './searchTitleSaga';
import searchArtistSaga from './searchArtistSaga';
import searchCategorySaga from './searchCategorySaga';

import pieceSaga from './singlePiece';
import addSeenArt from './addSeenArtSaga';
import getSeenArt from './getSeenArtSaga';
import deleteSeen from './deleteSeenArtSaga';
import editComment from './editCommentSaga';
import editLocation from './editLocationSaga';
import editDate from './editDateSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    searchTitleSaga(),
    pieceSaga(),
    addSeenArt(),
    getSeenArt(),
    deleteSeen(),
    editComment(),
    editLocation(),
    editDate(),
    searchArtistSaga(),
    searchCategorySaga(),
  ]);
}
