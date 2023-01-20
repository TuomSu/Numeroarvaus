import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { useState } from 'react';

const number = Math.floor(Math.random() * 100) + 1;

export default function App() {

  const [info, setInfo] = useState('Guess a number between 1-100');
  const [guess, setGuess] = useState('');
  const [count, setCount] = useState (parseInt(1));
  
  const check = () => {
    console.log(number);
    if (guess == number){
      Alert.alert('You guessed the number in ' + count + ' guesses' )
      setCount(parseInt(1));
      
    }else if( guess > number){
        setInfo('Your guess ' + guess + ' is too high')
        setCount(parseInt(count+1));
      }else if( guess < number){
        setInfo('Your guess ' + guess + ' is too low')
        setCount(parseInt(count+1));
      }
  };


  return (
    <View style={styles.container}>
      <Text> {info} </Text>
      <TextInput
     style={styles.input}
     onChangeText={guess => setGuess(guess)}
     value={guess}
        keyboardType="numeric"
     />
      <View style={styles.button}>
      <Button title="MAKE GUESS" onPress={check}/>
      <StatusBar style="auto" />
      </View>
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
  input:{ width:200, 
    borderColor:'grey', 
    borderWidth: 1
  },
  button: {flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'space-around'
},
});
