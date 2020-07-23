import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { getHeight, getWidth, fontFamily } from '../../utils/styles'
import color from '../../utils/colors'

const Button = ({
  buttonText,
  buttonTextColor,
  height,
  width,
  bottom,
  top,
  backgroundColor,
  onPress,
  disabled,
}: ButtonProp) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled ? true : false}
      style={{
        height: getHeight(height),
        width: getWidth(width),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: bottom,
        borderRadius: getWidth(30),
        borderColor: disabled ? color.LIGHT_GRAY : color.PRIMARY_BLUE,
        borderWidth: getWidth(1),
        backgroundColor: disabled ? color.LIGHT_GRAY : backgroundColor,
      }}
    >
      <Text
        style={{
          color: buttonTextColor,
          fontFamily: fontFamily.FONT_FAMILY_SEMI,
          fontSize: getHeight(18),
        }}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
