import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import color from '../../utils/colors'
import { getHeight, getWidth, fontFamily } from '../../utils/styles'

// components
import CryptoText from '../../components/Text'
import Button from '../../components/Button'
import KeyboardShift from '../../components/KeyboardShift'
import colors from '../../utils/colors'

const Authentication = ({
  navigation,
  headerText,
  topHalfImage,
  children,
  buttonText,
  accountVerificationText,
  authSwitchButtonText,
}: any) => {
  return (
    <KeyboardShift>
      <View style={styles.container}>
        <View style={styles.topHalf}>
          <CryptoText
            fontSize={getWidth(25)}
            fontFamily={fontFamily.FONT_FAMILY_SEMI}
            color={color.BLACK}
            top={getHeight(60)}
          >
            {headerText}
          </CryptoText>
          <Image source={topHalfImage} style={styles.loginIllustration} />
        </View>
        <View style={styles.bottomHalf}>
          {children}
          <Button
            buttonText={buttonText}
            buttonTextColor={color.WHITE}
            height={46}
            bottom={15}
            width={200}
            backgroundColor={color.PRIMARY_BLUE}
            onPress={() => navigation.navigate('Verification')}
          />
          <View style={styles.signupContainer}>
            <CryptoText
              color={color.BLACK}
              fontSize={16}
              fontFamily={fontFamily.FONT_FAMILY_REGULAR}
            >
              {accountVerificationText}
            </CryptoText>
            <TouchableOpacity
              style={{ marginLeft: getWidth(5) }}
              onPress={() => navigation.navigate(authSwitchButtonText)}
            >
              <CryptoText
                color={color.PRIMARY_BLUE}
                fontSize={16}
                fontFamily={fontFamily.FONT_FAMILY_BOLD}
              >
                {authSwitchButtonText}
              </CryptoText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardShift>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.SKY_BLUE,
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  topHalf: {
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
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: getWidth(20),
    borderTopRightRadius: getWidth(20),
    backgroundColor: colors.WHITE,
  },
  forgotPasswordButton: {
    marginRight: getWidth(25),
    top: getHeight(10),
    marginLeft: 'auto',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: getHeight(70),
  },
})

export default Authentication
