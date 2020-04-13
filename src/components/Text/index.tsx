import React from 'react'
import { Text } from 'react-native'
import { getHeight, getWidth } from '../../utils/styles'

type CryptoTextProp = TextProp & ComponentProp

const CryptoText = ({
  fontSize,
  color,
  top,
  fontFamily,
  children,
}: CryptoTextProp) => {
  return (
    <Text
      style={{
        fontSize: getWidth(fontSize),
        color,
        fontFamily,
        marginTop: top,
        textAlign: 'center',
      }}
    >
      {children}
    </Text>
  )
}

export default CryptoText
