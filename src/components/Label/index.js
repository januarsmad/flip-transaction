import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../../constant';

const Label = ({ theme, text }) => {
  return (
    <View
      style={{
        ...Style.container,
        ...(theme === 'primary' && Style.primary),
        ...(theme === 'warning' && Style.warning),
      }}>
      <Text
        style={{
          ...Style.text,
          ...(theme === 'primary' && Style.textPrimary),
        }}>
        {text}
      </Text>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginLeft: 5,
  },

  primary: {
    borderWidth: 0,
    backgroundColor: Colors.green,
  },

  warning: {
    borderWidth: 1,
    borderColor: Colors.orange,
  },

  text: {
    fontWeight: 'bold',
  },

  textPrimary: {
    color: Colors.white,
  },
});

export default Label;
