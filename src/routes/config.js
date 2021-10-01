import { TransactionList, TransactionDetail } from '../screens';
import { generateScreen } from '../helpers';

const ScreenList = [
  generateScreen('Transaction List', TransactionList),
  generateScreen('Transaction Detail', TransactionDetail),
];

export default ScreenList;
