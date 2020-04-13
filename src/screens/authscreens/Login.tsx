import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import color from '../../utils/colors'
import { getHeight, getWidth, fontFamily } from '../../utils/styles'

const loginIllustration = require('../../../assets/illustration/crypto/login.png')
const showPassword = require('../../../assets/active.png')
const hidePassword = require('../../../assets/inactive.png')

// components
import CryptoTextInput from '../../components/TextInput'
import CryptoText from '../../components/Text'
import Button from '../../components/Button'

const Login = ({ navigation }: ScreenProp) => {
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Image source={loginIllustration} style={styles.loginIllustration} />
      </View>
      <View style={styles.bottomHalf}>
        <CryptoTextInput
          placeholder="Email Address"
          height={getHeight(60)}
          width={getWidth(327)}
        />
        <CryptoTextInput
          placeholder="Password"
          icons={[showPassword, hidePassword]}
          height={getHeight(60)}
          width={getWidth(327)}
        />
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <CryptoText
            fontSize={getWidth(13)}
            fontFamily={fontFamily.FONT_FAMILY_SEMI}
            color={color.PRIMARY_BLUE}
          >
            Forgot your password?
          </CryptoText>
        </TouchableOpacity>
        <Button
          buttonText="Login"
          buttonTextColor={color.WHITE}
          height={46}
          width={200}
          backgroundColor={color.PRIMARY_BLUE}
          bottom={70}
          onPress={() => navigation.navigate('OnBoarding')}
        />
        <View style={styles.signupContainer}>
          <CryptoText
            color={color.BLACK}
            fontSize={16}
            fontFamily={fontFamily.FONT_FAMILY_REGULAR}
          >
            Don't have an account?
          </CryptoText>
          <TouchableOpacity
            style={{ marginLeft: getWidth(5) }}
            onPress={() => navigation.navigate('WelcomeScreen')}
          >
            <CryptoText
              color={color.PRIMARY_BLUE}
              fontSize={16}
              fontFamily={fontFamily.FONT_FAMILY_BOLD}
            >
              Sign Up
            </CryptoText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
  topHalf: {
    flex: 0.45,
    backgroundColor: color.SKY_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginIllustration: {
    height: getHeight(240),
    width: getWidth(326),
    resizeMode: 'contain',
  },
  bottomHalf: {
    flex: 0.55,
    alignItems: 'center',
  },
  forgotPasswordButton: {
    marginRight: getWidth(25),
    top: getHeight(10),
    marginLeft: 'auto',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: getHeight(60),
  },
})

export default Login
