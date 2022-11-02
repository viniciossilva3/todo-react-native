import { StatusBar } from 'react-native';
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts
} from '@expo-google-fonts/inter';

import { Loading } from './src/components/Loading';
import Home from './src/screens/Home';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />

      {fontsLoaded ? <Home /> : <Loading />}
    </>
  );
}


