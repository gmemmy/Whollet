import React from 'react'
import { Text } from 'react-native'

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
        fontSize: fontSize,
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
