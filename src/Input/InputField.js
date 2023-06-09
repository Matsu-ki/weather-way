import React from 'react';
import { View, TextInput } from 'react-native';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  value,
  onChangeText,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#FFF',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}
    >
      {icon}
      <TextInput
        placeholder={label}
        placeholderTextColor="#FFF"
        keyboardType={keyboardType}
        style={{ flex: 1, paddingVertical: 0, color: '#FFF' }}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={inputType === 'password'}
      />
    </View>
  );
}