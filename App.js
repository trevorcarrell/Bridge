import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Colors from './Themes/colors';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from "./Screens/LandingScreen";
import LogIn from "./Screens/LogIn";
import SignUp from "./Screens/SignUp";
import HomeScreen from "./Screens/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing Screen" component={LandingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Log In" component={LogIn} options={{headerShown: false}}/>
        <Stack.Screen name="Sign Up" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="Home Screen" component={HomeScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
