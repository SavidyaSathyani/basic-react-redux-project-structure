import { all, call } from 'redux-saga/effects';
import testSagas from './Test/test.sagas';

export default function* rootSaga() {
  yield all([call(testSagas)]);
};
