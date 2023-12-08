import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterUser from './src/screens/RegisterUser';
import ViewUser from './src/screens/ViewUser';
import ViewAllUser from './src/screens/ViewAllUser';
import DeleteUser from './src/screens/DeleteUser';
import UpdateUser from './src/screens/UpDateUser';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterUser} />
        <Stack.Screen name="View" component={ViewUser} />
        <Stack.Screen name="ViewAll" component={ViewAllUser} />
        <Stack.Screen name="Delete" component={DeleteUser} />
        <Stack.Screen name="Update" component={UpdateUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
