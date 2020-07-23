import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { getHeight, getWidth, fontFamily } from '../../utils/styles'
import color from '../../utils/colors'

// components
import CryptoTextInput from '../../components/TextInput'
import CryptoText from '../../components/Text'
import Authentication from '../../components/Authentication'

// assets
const loginIllustration = require('../../../assets/illustration/crypto/login.png')
const showPassword = require('../../../assets/active.png')
const hidePassword = require('../../../assets/inactive.png')

const Login = ({ navigation }: ScreenProp) => {
  return (
    <Authentication
      headerText=" Welcome Back!"
      navigation={navigation}
      topHalfImage={loginIllustration}
      buttonText="Login"
      accountVerificationText="Don't have an account?"
      authSwitchButtonText="SignUp"
      finishButtonNavigation="Verification"
    >
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
      <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPassword')}
        style={styles.forgotPasswordButton}
      >
        <CryptoText
          fontSize={getWidth(13)}
          fontFamily={fontFamily.FONT_FAMILY_SEMI}
          color={color.PRIMARY_BLUE}
        >
          Forgot your password?
        </CryptoText>
      </TouchableOpacity>
    </Authentication>
  )
}

const styles = StyleSheet.create({
  forgotPasswordButton: {
    marginRight: getWidth(25),
    top: getHeight(10),
    marginLeft: 'auto',
  },
})

export default Login
