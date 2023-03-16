import { NavigationContainer } from '@react-navigation/native';
import tw from 'twrnc';
import { Provider as PaperProvider } from 'react-native-paper';
import AuthStack from './src/Screens/authStack';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={tw`bg-white`}>
        <PaperProvider>
          <AuthStack />
        </PaperProvider>
        <StatusBar
          animated={true}
          translucent
          backgroundColor='transparent'
          barStyle='dark-content'
        />
      </NavigationContainer>
    </Provider>
  );
}
