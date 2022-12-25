import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { NetworkProvider } from 'react-native-offline';
import FlashMessage from 'react-native-flash-message';
import GlobalModal from 'react-native-global-modal-2/build/dist/GlobalModal';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './src/Screens/Home';

export default function App() {
  return (
   
   <NetworkProvider>

    <NavigationContainer>
    <StackScreen/>
    <GlobalModal/>
    </NavigationContainer>

    </NetworkProvider>
  );
}

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const StackScreen = ()=>{
  return(
    <Stack.Navigator initialRouteName='Gallery'>
        <Stack.Screen name="Home" component={MainScreen} options={{headerShown:false}} />
        <Stack.Screen name="Gallery" component={TabScreens} options={{headerShown:false}} />
        <Stack.Screen name="ImageSlider" component={ImageSlider}  />
      </Stack.Navigator>
  )
}

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabScreens = ()=>{
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Gallery') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Gallery" component={TopTabScreen}  />
      </Tab.Navigator>
  )
}

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import All_Images from './src/Screens/All_Images';
import Albums from './src/Screens/Albums';
import MainScreen from './src/Screens/MainScreen';
import ImageSlider from './src/Components/ImageSlider';



const TopTab = createMaterialTopTabNavigator();

const TopTabScreen = ()=>{
  return(
    <TopTab.Navigator>
      <TopTab.Screen name="All_Images" component={All_Images} options={{title:"All Images"}} />
      <TopTab.Screen name="Albums" component={Albums} 
      options={{title:"Albumss"}}
      />
    </TopTab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
