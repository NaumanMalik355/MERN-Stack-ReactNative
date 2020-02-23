import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import FlexBasic from './src/components/flex'
import LoginScreen from './src/components/LoginPage'
import SignUpScreen from './src/components/RegisterPage'
import { createAppContainer, createDrawerNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import AuthLoadingScreen from './src/components/AuthLoadingScreen';
import Header from './src/components/Screens/Header'
export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Header/>
      </View>
    );
  }
}

// const AppNavigator = createStackNavigator(
//   {
//     SignIn: LoginScreen,  //This is the default screen or use initialRouteName
//     SignUp: SignUpScreen,
//     Flex: FlexBasic
//   },
//   {
//     // initialRouteName: "SignIn",
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#546e7a',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   },
//   {
//     headerMode: 'none',
//   }
// );
// const AuthStack = createStackNavigator({ SignIn: LoginScreen, });

// const AppContainer = createAppContainer(createSwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     App: AppNavigator,
//     Auth: AuthStack,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   }
// ));

// export default AppContainer;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems:'center'
  },
});
