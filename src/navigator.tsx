import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// auth screens
import OnBoarding from './screens/OnBoardingScreens'
import WelcomeScreen from './screens/AuthScreens/WelcomeScreen'
import SignUp from './screens/AuthScreens/Signup'
import Login from './screens/AuthScreens/Login'
import Verification from './screens/AuthScreens/Verification'
import CreatePin from './screens/AuthScreens/CreatePin'

const Stack = createStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding" headerMode="none">
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="CreatePin" component={CreatePin} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
