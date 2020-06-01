import React from 'react'
import { TouchableOpacity } from 'react-native'
import { getHeight, getWidth } from '../../utils/styles'

// components
import CryptoTextInput from '../../components/TextInput'
import Authentication from '../../components/Authentication'

// assets
const signupIllustration = require('../../../assets/illustration/crypto/signup.png')
const showPassword = require('../../../assets/active.png')
const hidePassword = require('../../../assets/inactive.png')

const SignUp = ({ navigation }: ScreenProp) => {
  return (
    <Authentication
      headerText="Create Account"
      navigation={navigation}
      topHalfImage={signupIllustration}
      buttonText="Let's Get Started"
      accountVerificationText="Already have an account?"
      authSwitchButtonText="Login"
    >
      <CryptoTextInput
        placeholder="First Name"
        height={getHeight(60)}
        width={getWidth(327)}
      />
      <CryptoTextInput
        placeholder="Last Name"
        height={getHeight(60)}
        width={getWidth(327)}
      />
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
    </Authentication>
  )
}

export default SignUp
