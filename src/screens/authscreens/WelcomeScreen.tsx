import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import color from '../../utils/colors'
import { getHeight, getWidth, fontFamily } from '../../utils/styles'

const logo = require('../../../assets/logo.png')

// components
import CryptoText from '../../components/Text'
import Button from '../../components/Button'
import { TouchableOpacity } from 'react-native-gesture-handler'

const WelcomeScreen = ({ navigation }: ScreenProp) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <CryptoText
        color={color.LIGHT_GRAY}
        fontSize={30}
        top={30}
        fontFamily={fontFamily.FONT_FAMILY_LIGHT}
      >
        Welcome to
      </CryptoText>
      <CryptoText
        color={color.WHITE}
        fontSize={40}
        fontFamily={fontFamily.FONT_FAMILY_REGULAR}
      >
        WHOLLET
      </CryptoText>
      <Button
        buttonText="Create Account"
        buttonTextColor={color.PRIMARY_BLUE}
        height={46}
        width={200}
        backgroundColor={color.WHITE}
        bottom={10}
        onPress={() => navigation.navigate('OnBoarding')}
      />
      <View style={styles.signupContainer}>
        <CryptoText
          color={color.WHITE}
          fontSize={16}
          fontFamily={fontFamily.FONT_FAMILY_REGULAR}
        >
          Already have an account?
        </CryptoText>
        <TouchableOpacity
          style={{ marginLeft: getWidth(5) }}
          onPress={() => navigation.navigate('Login')}
        >
          <CryptoText
            color={color.WHITE}
            fontSize={16}
            fontFamily={fontFamily.FONT_FAMILY_BOLD}
          >
            Sign In
          </CryptoText>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY_BLUE,
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    height: getHeight(120),
    width: getWidth(122),
    marginTop: getHeight(120),
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: getHeight(70),
  },
})

export default WelcomeScreen
