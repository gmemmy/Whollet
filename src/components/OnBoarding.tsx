import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from 'react-native'
import color from '../utils/colors'
import { getHeight, getWidth, fontFamily } from '../utils/styles'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import data from '../screens/onboardingscreens/constants'

// Images

// components
import CryptoText from './Text'
import Button from './Button'

const OnBoarding = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const renderItems = ({ item }: any) => {
    return (
      <React.Fragment>
        <View style={styles.topHalf}>
          <TouchableOpacity style={styles.skipButton}>
            {activeSlide != 3 && (
              <CryptoText
                fontSize={18}
                color={color.PRIMARY_BLUE}
                fontFamily={fontFamily.FONT_FAMILY_BOLD}
              >
                Skip
              </CryptoText>
            )}
          </TouchableOpacity>
          <Image source={item.image} style={styles.animatedImage} />
        </View>
        <View style={styles.bottomHalf}>
          <Pagination
            dotsLength={data.length}
            activeDotIndex={activeSlide}
            dotColor={color.PRIMARY_BLUE}
            inactiveDotColor={color.LIGHT_GRAY}
            dotStyle={styles.paginationDot}
            inactiveDotStyle={styles.inactiveDot}
            inactiveDotOpacity={0.4}
          />
          <CryptoText
            fontSize={30}
            color={color.MIDNIGHT_BLUE}
            fontFamily={fontFamily.FONT_FAMILY_BOLD}
          >
            {item.title}
          </CryptoText>
          <CryptoText
            fontSize={16}
            color={color.DARK_GRAY}
            top={getHeight(10)}
            fontFamily={fontFamily.FONT_FAMILY_LIGHT}
          >
            {item.subTitle}
          </CryptoText>
          <Button
            backgroundColor={
              activeSlide === 3 ? color.PRIMARY_BLUE : color.WHITE
            }
            buttonText={item.buttonText}
            buttonTextColor={
              activeSlide === 3 ? color.WHITE : color.PRIMARY_BLUE
            }
            height={46}
            width={200}
            top={110}
          />
        </View>
      </React.Fragment>
    )
  }

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItems}
        sliderWidth={getWidth(375)}
        firstItem={activeSlide}
        itemWidth={getWidth(375)}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
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
  animatedImage: {
    height: getHeight(240),
    width: getWidth(326),
    resizeMode: 'contain',
  },
  bottomHalf: {
    flex: 0.55,
    alignItems: 'center',
  },
  skipButton: {
    left: getWidth(150),
    bottom: getHeight(8),
  },
  swiper: {
    alignItems: 'center',
    backgroundColor: 'red',
  },
  paginationDot: {
    width: getWidth(10),
    height: getHeight(10),
    borderRadius: getWidth(5),
    marginHorizontal: -8,
  },
  inactiveDot: {
    width: getWidth(20),
    height: getHeight(20),
    borderRadius: getWidth(10),
  },
})

export default OnBoarding
