import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Text, Image } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [idade, setIdade] = useState(0);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        onChangeText={(valor) => setIdade(valor)}
      />

      {idade >= 18 ? (
        <>
          <Text style={styles.textReturn}>
            Você é maior de idade!
          </Text>
        </>
      ) : idade >= 1 ? (
        <>
        <Text style={styles.textReturn}>
          Você ainda é menor de idade!
        </Text>
          </>
      ) : null}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 20,
  },

  textReturn: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});