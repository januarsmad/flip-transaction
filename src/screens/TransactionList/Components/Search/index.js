import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import SearchIcon from '../../../../assets/svg/search.svg';
import ChevronDown from '../../../../assets/svg/chevron.svg';
import { Colors } from '../../../../constant';
import { Button } from '../../../../components';

const Search = ({ search, selectedSort, onChangeInput, onPressSort }) => {
  return (
    <View style={Style.searchContainer}>
      <SearchIcon width={25} height={25} />
      <TextInput
        style={Style.textInput(search)}
        value={search}
        placeholder="Cari nama, bank, atau nominal"
        onChangeText={onChangeInput}
      />
      <Button
        onPress={onPressSort}
        text={!selectedSort.value ? 'URUTKAN' : selectedSort.label}
        rightIcon={<ChevronDown width={17} height={18} />}
      />
    </View>
  );
};

const Style = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingLeft: 10,
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },

  textInput: search => ({
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 8,
    height: '100%',
    textDecorationLine: search ? 'underline' : 'none',
  }),
});

export default Search;
