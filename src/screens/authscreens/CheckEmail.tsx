import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { fontFamily, getWidth, getHeight } from '../../utils/styles'
import colors from '../../utils/colors'

// components
import CryptoText from '../../components/Text'
import Button from '../../components/Button'

const CheckEmail = ({ navigation }: ScreenProp) => {
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
          color={colors.MIDNIGHT_BLUE}
          fontSize={getWidth(27)}
          fontFamily={fontFamily.FONT_FAMILY_SEMI}
        >
          Check Your Email
        </CryptoText>
        <View style={styles.subHeader}>
          <CryptoText
            color={colors.DARK_GRAY}
            fontFamily={fontFamily.FONT_FAMILY_LIGHT}
            fontSize={getWidth(16)}
          >
            Follow the password recovery instructions we have just sent to your
            email address.
          </CryptoText>
        </View>
      </View>
      <View style={styles.imageView}>
        <Image
          style={styles.coverIllustration}
          source={require('../../../assets/illustration/crypto/email.png')}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          buttonText="Back to Login"
          buttonTextColor={colors.WHITE}
          height={46}
          bottom={60}
          width={200}
          backgroundColor={colors.PRIMARY_BLUE}
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.SKY_BLUE,
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
  coverIllustration: {
    height: getHeight(220),
    width: getWidth(273),
    resizeMode: 'contain',
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getHeight(150),
  },
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
  },
})

export default CheckEmail
