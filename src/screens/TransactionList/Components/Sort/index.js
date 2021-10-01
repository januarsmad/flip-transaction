import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import { Colors } from '../../../../constant';
import { Modal } from '../../../../components';

const sortConditions = [
  {
    value: '',
    label: 'URUTKAN',
  },
  {
    value: 'nameaz',
    label: 'Nama A-Z',
  },
  {
    value: 'nameza',
    label: 'Nama Z-A',
  },
  {
    value: 'newest',
    label: 'Tanggal Terbaru',
  },
  {
    value: 'oldest',
    label: 'Tanggal Terlama',
  },
];

const Sort = ({ isVisible, closeSort, selectedSort, onPressSelectedItem }) => {
  const renderSortItem = () => {
    return sortConditions.map((condition, i) => (
      <TouchableOpacity
        key={i}
        style={Style.radioList}
        activeOpacity={0.5}
        onPress={onPressSelectedItem(condition)}>
        <View style={Style.radio}>
          {selectedSort.label === condition.label && (
            <View style={Style.selectedRadio} />
          )}
        </View>
        <Text>{condition.label}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <Modal isVisible={isVisible} closeModal={closeSort}>
      <View style={Style.sortContainer}>{renderSortItem()}</View>
    </Modal>
  );
};

const Style = StyleSheet.create({
  sortContainer: {
    paddingHorizontal: 30,
    paddingTop: 30,
    borderRadius: 8,
    backgroundColor: Colors.white,
  },

  radioList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },

  radio: {
    width: 20,
    height: 20,
    marginRight: 10,
    padding: 2,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.orange,
  },

  selectedRadio: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    backgroundColor: Colors.orange,
  },
});

export default Sort;
