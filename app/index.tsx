import { StyleSheet } from 'react-native';

import { Button, Text, View } from '@/components/Themed';
import { Link, router } from 'expo-router';

export default function App() {
  const truee = true;
  return (
    <View style={styles.container}>
      <Text>Inicio</Text>
      { truee ? <Button title="Iniciar" onPress={() => router.push('/(tabs)')} /> : null }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});