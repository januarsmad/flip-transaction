import { takeLatest, put, call } from 'redux-saga/effects';
import { Dispatch, Endpoint } from '../../constant';
import { request } from '../../helpers';

function* getTransactionList() {
  try {
    const { response } = yield call(request, Endpoint.transactionList);
    yield put({
      type: Dispatch.SET_TRANSACTION_LIST,
      payload: response,
    });
  } catch (error) {
    console.log('[GET_TRANSACTION_LIST]', error.message);
  }
}

export default function* rootSaga() {
  yield takeLatest(Dispatch.GET_TRANSACTION_LIST, getTransactionList);
}
