import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
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
import Button from '../../components/Button'

const CELL_COUNT = 4

const CreatePin = ({ navigation }: ScreenProp) => {
  const [value, setValue] = useState('')
  const [inputIndex, setInputIndex] = useState(1)
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
          Create a PIN
        </CryptoText>
        <View style={styles.subHeader}>
          <CryptoText
            color={color.DARK_GRAY}
            fontFamily={fontFamily.FONT_FAMILY_LIGHT}
            fontSize={getWidth(16)}
          >
            Enhance the security of your account by creating a PIN code
          </CryptoText>
        </View>
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
            {setInputIndex(index)}
          </Text>
        )}
      />
      <View style={styles.bottomContainer}>
        <Button
          buttonText="Proceed"
          buttonTextColor={color.WHITE}
          height={46}
          bottom={15}
          width={200}
          backgroundColor={color.PRIMARY_BLUE}
          disabled={inputIndex < 4 ? true : false}
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
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
  subHeader: {
    width: getWidth(330),
    marginTop: getHeight(5),
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
  bottomContainer: {
    marginTop: 'auto',
    marginBottom: getHeight(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default CreatePin
