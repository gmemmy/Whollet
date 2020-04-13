import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import Navigator from './src/navigator'

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    Font.loadAsync({
      'TitilliumWebRegular': require('./assets/fonts/TitilliumWeb-Regular.ttf'),
      'TitilliumWebLight': require('./assets/fonts/TitilliumWeb-Light.ttf'),
      'TitilliumWebSemi': require('./assets/fonts/TitilliumWeb-SemiBold.ttf'),
      'TitilliumWebBold': require('./assets/fonts/TitilliumWeb-Bold.ttf'),
    }).then(() => setFontLoaded(true))

    return () => {
      setFontLoaded(false)
    }
  }, [])

  if (!fontLoaded) {
    return <View />
  }
  return (
    <Navigator />
  );
}

