import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi there welcome to lpSolver.</Text>
      <Text>Kindly enter the number of coefficients of the objective function you wish to optimise.</Text>
      <TextInput keyboardType='numeric'/>
      <Text>Enter the number of constraints</Text>
      <TextInput keyboardType='numeric'/>
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
});
