import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './src/presentation/navigation/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
