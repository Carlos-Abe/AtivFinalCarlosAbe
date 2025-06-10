import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export default function LoadingSpinner({ size = 'large', text = 'carregando...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color="#000" />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#6b7280',
  },
});
