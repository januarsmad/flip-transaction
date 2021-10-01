export default (selectedSort, transactionList) => {
  const sortDate = transactionList.sort((a, b) => {
    const dateA = new Date(a[1].created_at).getTime();
    const dateB = new Date(b[1].created_at).getTime();

    const nameA = a[1].beneficiary_name.toLowerCase();
    const nameB = b[1].beneficiary_name.toLowerCase();

    if (selectedSort.value === 'nameaz') {
      return nameA.localeCompare(nameB);
    } else if (selectedSort.value === 'nameza') {
      return nameB.localeCompare(nameA);
    } else if (selectedSort.value === 'oldest') {
      return dateA - dateB;
    }

    return dateB - dateA;
  });

  return sortDate;
};
