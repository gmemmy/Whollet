import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import OnBoarding from './screens/OnBoardingScreens'
import Login from './screens/AuthScreens/Login'

// auth screens
import WelcomeScreen from './screens/AuthScreens/WelcomeScreen'

const Stack = createStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding" headerMode="none">
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
