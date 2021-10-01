import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Colors } from '../../constant';

const Button = ({ text, rightIcon, onPress }) => {
  return (
    <TouchableOpacity style={Style.container} onPress={onPress}>
      <Text style={Style.text}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  text: {
    color: Colors.orange,
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default Button;
