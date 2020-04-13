import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { getHeight, getWidth, fontFamily } from '../../utils/styles'
import color from '../../utils/colors'

const Button = ({
  buttonText,
  buttonTextColor,
  height,
  width,
  top,
  backgroundColor,
  onPress,
}: ButtonProp) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: getHeight(height),
        width: getWidth(width),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: getHeight(top),
        borderRadius: getWidth(30),
        borderColor: color.PRIMARY_BLUE,
        borderWidth: getWidth(1),
        backgroundColor,
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
