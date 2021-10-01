import { combineReducers } from 'redux';

import transaction from './Transactions/reducer';

const rootReducers = combineReducers({ transaction });

export default rootReducers;
