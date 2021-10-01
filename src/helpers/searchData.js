export default (search, selectTransactionList) => {
  const filterData = selectTransactionList.filter(data => {
    if (
      data[1].sender_bank.toLowerCase().includes(search.toLowerCase()) ||
      data[1].beneficiary_bank.toLowerCase().includes(search.toLowerCase()) ||
      data[1].beneficiary_name.toLowerCase().includes(search.toLowerCase()) ||
      String(data[1].amount).includes(search.toLowerCase())
    ) {
      return data;
    }
  });

  return filterData;
};
