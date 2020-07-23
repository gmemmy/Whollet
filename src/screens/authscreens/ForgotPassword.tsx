import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import color from '../../utils/colors'
import { getHeight, getWidth, fontFamily } from '../../utils/styles'
import CryptoText from '../../components/Text'

// components
import CryptoTextInput from '../../components/TextInput'
import Button from '../../components/Button'

const ForgotPassword = ({ navigation }: ScreenProp) => {
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
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
            Forgot Password?
          </CryptoText>
          <View style={styles.subHeader}>
            <CryptoText
              color={color.DARK_GRAY}
              fontFamily={fontFamily.FONT_FAMILY_LIGHT}
              fontSize={getWidth(16)}
            >
              Enter your registered email address to receive password reset
              instructions.
            </CryptoText>
          </View>
        </View>
      </View>
      <View style={styles.bottomHalf}>
        <CryptoTextInput
          placeholder="Email Address"
          height={getHeight(60)}
          width={getWidth(327)}
        />
        <Button
          buttonText="Reset Password"
          buttonTextColor={color.WHITE}
          height={46}
          bottom={60}
          width={200}
          backgroundColor={color.PRIMARY_BLUE}
          onPress={() => navigation.navigate('CheckEmail')}
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
  topHalf: {
    backgroundColor: color.SKY_BLUE,
    flex: 0.4,
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
  header: {
    width: getWidth(300),
    left: getWidth(45),
    alignItems: 'center',
  },
  subHeader: {
    width: getWidth(330),
    marginTop: getHeight(5),
  },
  bottomHalf: {
    alignItems: 'center',
    flex: 0.6,
    borderTopLeftRadius: getWidth(20),
    borderTopRightRadius: getWidth(20),
    backgroundColor: color.WHITE,
  },
})

export default ForgotPassword
