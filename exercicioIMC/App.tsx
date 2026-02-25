import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Text, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [textImc, setTextImc] = useState('');


  function handleImc() {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

     if (!pesoNum || !alturaNum) return;

    const resultado = pesoNum / (alturaNum * alturaNum);

    setImc(resultado.toFixed(2));

    if (resultado <= 18.5) {
      setTextImc('Abaixo do peso');
    } 
    else if (resultado <= 24.9) {
      setTextImc('Peso normal');
    } 
    else if (resultado <= 29.9) {
      setTextImc('Sobrepeso');
    } 
    else if (resultado <= 34.9) {
      setTextImc('Obesidade grau I');
    } 
    else if (resultado <= 39.9) {
      setTextImc('Obesidade grau II');
    } 
    else {
      setTextImc('Obesidade grau III');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua Peso"
        onChangeText={(valor) => setPeso(valor)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua altura"
        onChangeText={(valor) => setAltura(valor)}
      />
      
      <Button title="Calcular IMC" onPress={handleImc} />

      {imc && (
        <Text style={styles.textReturn}>
          Seu IMC é {imc} - {textImc}
        </Text>
      )}


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f3',
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