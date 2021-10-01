import React, { useEffect, useState, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getTransactionList } from '../../redux/actions';
import { filterSearchData, sortingData } from '../../helpers';

import Search from './Components/Search';
import Sort from './Components/Sort';
import List from './Components/TransactionList';

const TransactionList = ({ navigation }) => {
  const dispatch = useDispatch();
  const selectTransactionList = useSelector(
    (state) => state.transaction.transactionList,
  );

  const [transactionList, setTransactionList] = useState([]);
  const [selectedSort, setSelectedSort] = useState({
    value: '',
    label: 'URUTKAN',
  });
  const [search, setSearch] = useState('');
  const [showSort, setShowSort] = useState(false);

  useEffect(() => {
    dispatch(getTransactionList());
  }, [dispatch]);

  useEffect(() => {
    setTransactionList(selectTransactionList);
  }, [selectTransactionList]);

  useEffect(() => {
    if (selectedSort) {
      setTransactionList(sortData);
    }
  }, [selectedSort, sortData]);

  useEffect(() => {
    if (search) {
      setTransactionList(searchData);
    }
  }, [search, searchData]);

  const sortData = useMemo(
    () => sortingData(selectedSort, transactionList),
    [selectedSort, transactionList],
  );

  const searchData = useMemo(
    () => filterSearchData(search, selectTransactionList),
    [search, selectTransactionList],
  );

  const onChangeInput = (value) => {
    setSearch(value);
  };

  const onPressSelectedItem = (value) => {
    return () => {
      setSelectedSort(value);
      setShowSort(!showSort);
    };
  };

  const handleShowSort = () => setShowSort(!showSort);

  return (
    <View style={Style.container}>
      <Search
        search={search}
        selectedSort={selectedSort}
        onChangeInput={onChangeInput}
        onPressSort={handleShowSort}
      />
      <Sort
        isVisible={showSort}
        closeSort={handleShowSort}
        selectedSort={selectedSort}
        onPressSelectedItem={onPressSelectedItem}
      />
      <List transactionList={transactionList} navigation={navigation} />
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
});

export default TransactionList;
