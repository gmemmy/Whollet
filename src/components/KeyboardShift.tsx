import React, { useEffect, useState } from 'react'
import {
  Keyboard,
  Dimensions,
  Animated,
  UIManager,
  StyleSheet,
  TextInput,
} from 'react-native'

const { State: TextInputState } = TextInput

const KeyboardShift = ({ children }: ComponentProp) => {
  const [shift, setShift] = useState(new Animated.Value(0))
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow)
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide)
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow)
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide)
    }
  }, [])

  const _keyboardDidShow = (event: any) => {
    const { height: windowHeight } = Dimensions.get('window')
    const keyboardHeight = event.endCoordinates.height
    const currentlyFocusedField = TextInputState.currentlyFocusedField()
    UIManager.measure(
      currentlyFocusedField,
      (originX, originY, width, height, pageX, pageY) => {
        const fieldHeight = height
        const fieldTop = pageY
        const gap =
          windowHeight - keyboardHeight - (fieldTop + fieldHeight + 10)
        if (gap >= 0) {
          return
        }
        Animated.timing(shift, {
          toValue: gap,
          duration: 100,
          useNativeDriver: true,
        }).start()
      }
    )
  }

  const _keyboardDidHide = () => {
    Animated.timing(shift, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }
  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY: shift }] }]}
    >
      {children}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
    width: '100%',
  },
})

export default KeyboardShift
