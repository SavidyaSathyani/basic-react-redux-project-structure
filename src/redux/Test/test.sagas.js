import { call, all, takeLatest } from "@redux-saga/core/effects";
import testTypes from "./test.types";

export function* testAction() {

};

export function* onTestAction() {
  yield takeLatest(testTypes.TEST_TYPE, testAction);
};

export function* testSagas() {
  yield all([
    call(onTestAction),
  ]);
};
