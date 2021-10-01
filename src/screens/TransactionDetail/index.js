import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';

import { formatDate, formatCurrency, formatBankName } from '../../helpers';
import { Colors } from '../../constant';
import RightArrow from '../../assets/svg/right-arrow.svg';
import Copy from '../../assets/svg/copy.svg';

const TransactionDetail = ({ route: { params } }) => {
  const data = params.data;

  const [showDetail, setShowDetail] = useState(false);
  const [showCopyToast, setShowCopyToast] = useState(false);

  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const handleShowDetail = () => {
    setShowDetail(!showDetail);
    toggleCollapse(!showDetail);
  };

  const toggleCollapse = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: showDetail ? 0 : -500,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: showDetail ? 1 : 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const onPressCopy = (value = '') => {
    return () => {
      setShowCopyToast(!showCopyToast);
      Clipboard && Clipboard.setString(value);
      console.log(Clipboard, value);

      setTimeout(() => {
        setShowCopyToast(false);
      }, 1000);
    };
  };

  return (
    <View>
      <View style={[Style.container, Style.row, Style.mt20]}>
        <Text style={Style.title}>ID TRANSAKSI: #{data.id}</Text>
        <TouchableOpacity
          onPress={onPressCopy(data.id)}
          style={Style.copy}
          activeOpacity={0.5}>
          <Copy width={20} height={20} />
          {showCopyToast && (
            <View style={[Style.copyToast, Style.shadow]}>
              <Text style={Style.toastText}>Id Transaksi dicopy</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={[Style.row, Style.spaceBetween, Style.container]}>
        <Text style={Style.title}>DETAIL TRANSAKSI</Text>
        <Text style={Style.collapseText} onPress={handleShowDetail}>
          {showDetail ? 'Buka' : 'Tutup'}
        </Text>
      </View>
      <Animated.View style={Style.collapse(translateY, opacity)}>
        <View style={[Style.alignCenter, Style.mb20]}>
          <Text style={Style.bankName}>{formatBankName(data.sender_bank)}</Text>
          <View style={Style.rightArrow}>
            <RightArrow width={20} height={16} />
          </View>
          <Text style={Style.bankName}>
            {formatBankName(data.beneficiary_bank)}
          </Text>
        </View>

        <View style={[Style.row, Style.mb20]}>
          <View style={Style.flex}>
            <Text style={Style.title}>{data.beneficiary_name}</Text>
            <Text>{data.account_number}</Text>
          </View>
          <View style={Style.flex}>
            <Text style={Style.title}>NOMINAL</Text>
            <Text>{formatCurrency(data.amount)}</Text>
          </View>
        </View>

        <View style={[Style.row, Style.mb20]}>
          <View style={Style.flex}>
            <Text style={Style.title}>BERITA TRANSFER</Text>
            <Text>{data.remark}</Text>
          </View>
          <View style={Style.flex}>
            <Text style={Style.title}>KODE UNIK</Text>
            <Text>{data.unique_code}</Text>
          </View>
        </View>

        <Text style={Style.title}>WAKTU DIBUAT</Text>
        <Text>{formatDate(data.created_at)}</Text>
      </Animated.View>
    </View>
  );
};

const Style = StyleSheet.create({
  flex: {
    flex: 1,
  },

  row: {
    flexDirection: 'row',
  },

  mt20: {
    marginTop: 0,
  },

  mb20: {
    marginBottom: 15,
  },

  title: {
    fontWeight: 'bold',
    marginRight: 10,
  },

  container: {
    padding: 20,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: Colors.grey,
  },

  shadow: {
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowColor: 'rgba(232, 232, 232, 0.6)',
    elevation: 1,
  },

  collapse: (translateY, opacity) => ({
    transform: [{ translateY }],
    backgroundColor: Colors.white,
    padding: 20,
    zIndex: -1,
    opacity,
  }),

  collapseText: {
    color: Colors.orange,
    fontWeight: 'bold',
  },

  alignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bankName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  copy: {
    flex: 1,
    position: 'relative',
  },

  copyToast: {
    position: 'absolute',
    borderRadius: 4,
    backgroundColor: Colors.orange,
    padding: 5,
    marginLeft: 10,
    left: 15,
    bottom: 10,
  },

  toastText: {
    color: Colors.white,
    fontSize: 10,
  },
});

export default TransactionDetail;
