import { ActivityIndicator, StatusBar } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Home } from './src/screens/Home';
import { useFonts, Nunito_400Regular, Nunito_700Bold, Nunito_300Light_Italic, Nunito_800ExtraBold_Italic } from '@expo-google-fonts/nunito';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Nunito_400Regular, 
    Nunito_700Bold, 
    Nunito_300Light_Italic,
    Nunito_800ExtraBold_Italic
  })

     return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      { !fontsLoaded ? <ActivityIndicator color="black"/>:
      
      <Home />
      }
   
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
