import { Dispatch } from '../../constant';

const getTransactionList = () => ({
  type: Dispatch.GET_TRANSACTION_LIST,
});

const setTransactionList = payload => ({
  type: Dispatch.SET_TRANSACTION_LIST,
  payload,
});

export { getTransactionList, setTransactionList };
