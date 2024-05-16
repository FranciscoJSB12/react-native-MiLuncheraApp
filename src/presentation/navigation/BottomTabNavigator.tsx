import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { HomeStackNavigator } from './HomeStackNavigator';
import { lightThemeColors } from '../../config/theme/global-theme';

const Tab = createBottomTabNavigator();

function Hola() {
  return (
    <View
      style={{
        backgroundColor: lightThemeColors.mediumOrange,
        flex: 1,
      }}
    >
      <Text>Hola</Text>
    </View>
  );
}

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: lightThemeColors.mediumOrange,
        tabBarInactiveTintColor: lightThemeColors.lightGray,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: lightThemeColors.darkBlue,
          borderTopWidth: 0,
          height: 60,
          paddingTop: 4,
          paddingBottom: 8,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        },
      }}
    >
      <Tab.Screen
        name='HomeScreen'
        options={{
          title: 'Inicio',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name={'home'}
              size={size}
              color={color}
            />
          ),
        }}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name='CartScreen'
        options={{
          title: 'Carrito',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name={'cart'}
              size={size}
              color={color}
            />
          ),
        }}
        component={Hola}
      />
      <Tab.Screen
        name='AccountScreen'
        options={{
          title: 'Cuenta',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name={'account'}
              size={size}
              color={color}
            />
          ),
        }}
        component={Hola}
      />
    </Tab.Navigator>
  );
};
