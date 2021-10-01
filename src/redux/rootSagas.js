import { all } from 'redux-saga/effects';

import transactionSaga from './Transactions/saga';

export default function* rootSagas() {
  yield all([transactionSaga()]);
}
