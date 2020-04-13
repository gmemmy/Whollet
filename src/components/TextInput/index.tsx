import React, { useState } from 'react'
import {
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { getHeight, getWidth } from '../../utils/styles'
import color from '../../utils/colors'

const CryptoTextInput = ({
  placeholder,
  height,
  width,
  icons,
}: TextInputProp) => {
  const [passwordIcon, setPasswordIcon] = useState(icons ? icons[1] : null)
  const [hidePassword, setHidePassword] = useState(true)
  return (
    <View
      style={{
        flexDirection: 'row',
        height,
        width,
        borderBottomColor: color.LIGHT_GRAY,
        borderBottomWidth: 0.5,
        alignItems: 'flex-end',
      }}
    >
      <TextInput
        placeholder={placeholder}
        secureTextEntry={icons && hidePassword}
        placeholderTextColor={color.GRAY}
        style={{
          top: getHeight(7),
          width: getWidth(300),
          height: getHeight(40),
        }}
      />
      {icons && (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            if (passwordIcon === icons[1]) {
              setPasswordIcon(icons[0])
              setHidePassword(false)
            } else {
              setPasswordIcon(icons[1])
              setHidePassword(true)
            }
          }}
        >
          <Image source={passwordIcon} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    height: getHeight(24),
    width: getWidth(24),
    resizeMode: 'contain',
  },
  iconButton: {
    bottom: getHeight(5),
  },
})

export default CryptoTextInput
