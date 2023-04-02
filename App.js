import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
  const [fonteCarregada] = useFonts({
    "Montserrat": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
})

if (!fonteCarregada){
  return <View></View>
}
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
