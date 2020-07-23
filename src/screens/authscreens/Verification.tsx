import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import color from '../../utils/colors'
import { getHeight, getWidth, fontFamily } from '../../utils/styles'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'

// components
import CryptoText from '../../components/Text'

const CELL_COUNT = 4

const Verification = ({ navigation }: ScreenProp) => {
  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../../assets/back.png')}
          style={styles.backButtonImage}
        />
      </TouchableOpacity>
      <View style={styles.header}>
        <CryptoText
          color={color.MIDNIGHT_BLUE}
          fontSize={getWidth(27)}
          fontFamily={fontFamily.FONT_FAMILY_SEMI}
        >
          Verification Required
        </CryptoText>
        <CryptoText
          color={color.DARK_GRAY}
          fontFamily={fontFamily.FONT_FAMILY_LIGHT}
          fontSize={getWidth(16)}
        >
          Please enter your PIN to proceed
        </CryptoText>
      </View>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.SKY_BLUE,
  },
  codeFiledRoot: {
    marginTop: getHeight(200),
    justifyContent: 'space-around',
    paddingHorizontal: getWidth(50),
  },
  cell: {
    width: getWidth(35),
    height: getHeight(40),
    lineHeight: getHeight(38),
    fontSize: getWidth(24),
    borderWidth: getHeight(2),
    borderColor: color.GRAY,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: color.BLACK,
  },
  header: {
    width: getWidth(300),
    left: getWidth(45),
    alignItems: 'center',
  },
  backButtonImage: {
    resizeMode: 'contain',
    height: getHeight(27),
    width: getWidth(27),
  },
  backButton: {
    top: getHeight(42),
    width: getWidth(40),
    left: getWidth(5),
    height: getHeight(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Verification
