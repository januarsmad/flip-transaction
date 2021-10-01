import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Colors } from '../../../../constant';
import {
  formatBankName,
  formatCurrency,
  formatDate,
} from '../../../../helpers';
import { Label } from '../../../../components';
import RightArrow from '../../../../assets/svg/right-arrow.svg';

const TransactionList = ({ transactionList, navigation }) => {
  const renderTransactionCard = ({ item }) => {
    const data = item[1];
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={Style.cardContainer}
        onPress={() => navigation.navigate('Transaction Detail', { data })}>
        <View style={Style.decoration(data.status)} />

        <View style={Style.textContainer}>
          <View style={Style.alignCenter}>
            <Text style={Style.bankName}>
              {formatBankName(data.sender_bank)}
            </Text>
            <View style={Style.rightArrow}>
              <RightArrow width={20} height={16} />
            </View>
            <Text style={Style.bankName}>
              {formatBankName(data.beneficiary_bank)}
            </Text>
          </View>

          <Text style={Style.benefiCiaryName}>
            {data.beneficiary_name.toUpperCase()}
          </Text>

          <View style={[Style.alignCenter, Style.wrapText]}>
            <Text>{formatCurrency(data.amount)}</Text>
            <View style={Style.dot} />
            <Text>{formatDate(data.created_at)}</Text>
          </View>
        </View>

        <Label
          text={data.status === 'PENDING' ? 'Pengecekan' : 'Success'}
          theme={data.status === 'SUCCESS' ? 'primary' : 'warning'}
        />
      </TouchableOpacity>
    );
  };

  if (transactionList.length) {
    return (
      <FlatList
        data={transactionList}
        keyExtractor={(item) => item[0]}
        renderItem={renderTransactionCard}
        showsVerticalScrollIndicator={false}
      />
    );
  }

  return (
    <View>
      <View style={Style.loading} />
      <View style={Style.loading} />
      <View style={Style.loading} />
    </View>
  );
};

const Style = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingRight: 20,
    marginBottom: 10,
    elevation: 1,
  },

  textContainer: {
    flex: 1,
    paddingVertical: 20,
    marginRight: 'auto',
    paddingLeft: 30,
  },

  wrapText: {
    flex: 1,
    flexWrap: 'wrap',
  },

  benefiCiaryName: {
    marginVertical: 5,
  },

  decoration: (status) => ({
    position: 'absolute',
    width: 6,
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: status === 'SUCCESS' ? Colors.green : Colors.orange,
  }),

  alignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rightArrow: {
    marginHorizontal: 5,
  },

  bankName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  dot: {
    width: 5,
    height: 5,
    backgroundColor: Colors.black,
    borderRadius: 50,
    marginHorizontal: 5,
  },

  loading: {
    borderRadius: 10,
    height: 110,
    backgroundColor: Colors.grey,
    marginBottom: 10,
  },
});

export default TransactionList;
