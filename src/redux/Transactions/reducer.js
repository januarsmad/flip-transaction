import { Dispatch } from '../../constant';

const initialState = {
  transactionList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Dispatch.SET_TRANSACTION_LIST:
      return { ...state, transactionList: Object.entries(action.payload) };

    default:
      return state;
  }
};
