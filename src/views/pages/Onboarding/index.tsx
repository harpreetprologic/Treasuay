import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native';
import RGradient from 'views/components/gradient/RadialGradient';


const {width, height} = Dimensions.get('window');

const Dots = ({selected}: {selected: any}) => {
  let backgroundColor;

  backgroundColor = selected ? '#fff' : 'transparent';

  return (
    <View
      style={{
        // height: erical(350),
        height: height / 2.3,
      }}>
      <View
        style={{
          width: 15,
          height: 15,
          marginHorizontal: 3,
          borderRadius: 15,
          backgroundColor,
          borderColor: '#fff',
          borderWidth: 1,
        }}
      />
    </View>
  );
};

const Skip = ({...props}) => {
  return (
    <TouchableOpacity style={styles.buttonConatiner} {...props}>
      <Text style={styles.buttonText}>Skip</Text>
    </TouchableOpacity>
  );
};

const Next = ({...props}) => (
  <TouchableOpacity style={styles.buttonConatiner} {...props}>
    <Text style={styles.buttonText}>Next</Text>
  </TouchableOpacity>
);
const Done = ({...props}) => (
  <View style={styles.doneButtonContainer}>
    <TouchableOpacity style={styles.doneButtonTextContainer} {...props}>
      <Text style={styles.doneButtonText}>Get Started</Text>
    </TouchableOpacity>
  </View>
);

const OnBoardingScreen = () => {
  const navigation: any = useNavigation();
  return (
    <>
      <RGradient x="50%" y="45%" rx="50%" ry="50%" />
      <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.navigate('Login')}
        onDone={() => navigation.navigate('Login')}
        pages={[
          {
            backgroundColor: 'transparent',
            image: (
              <View style={[styles.imageContainer, {paddingTop: 40}]}>
                <Image
                  source={require('../../../assets/images/board-1.png')}
                  resizeMode="cover"
                  style={styles.image}
                />
              </View>
            ),
            title: 'Treasury Collective ',
            titleStyles: {
              fontSize: 30,
              fontWeight: '500',
              fontFamily: 'PlayfairDisplay-MediumItalic',
              marginTop: 60,
            },
            subTitleStyles: {
              fontSize: 20,
              color: '#fff',
              fontFamily: 'PlayfairDisplay-Regular',
              lineHeight: 28,
              fontWeight: '300',
            },
            subtitle:
              'is a community for curators \n to discover, collect, and shop \n treasures from past, present, \n and future',
          },
          {
            backgroundColor: 'transparent',
            image: (
              <View style={styles.imageContainer}>
                <Image
                  source={require('../../../assets/images/board-2.png')}
                  resizeMode="cover"
                  style={[styles.image, {marginTop: 150}]}
                />
              </View>
            ),
            title: 'Hunt',
            titleStyles: {
              fontSize: 30,
              fontWeight: '500',
              fontFamily: 'PlayfairDisplay-MediumItalic',
              marginTop: 70,
            },
            subTitleStyles: {
              fontSize: 20,
              color: '#fff',
              fontFamily: 'PlayfairDisplay-Regular',
              lineHeight: 28,
              fontWeight: '300',
            },
            subtitle: 'for treasures to shop \n and tastemakers to follow',
          },
          {
            backgroundColor: 'transparent',
            image: (
              <View style={styles.imageContainer}>
                <Image
                  source={require('../../../assets/images/board-3.png')}
                  resizeMode="cover"
                  style={[styles.image, {marginTop: 150}]}
                />
              </View>
            ),
            title: 'Treasure',
            titleStyles: {
              fontSize: 30,
              fontWeight: '500',
              fontFamily: 'PlayfairDisplay-MediumItalic',
              marginTop: 70,
            },
            subTitleStyles: {
              fontSize: 20,
              color: '#fff',
              fontFamily: 'PlayfairDisplay-Regular',
              lineHeight: 28,
              fontWeight: '300',
            },
            subtitle:
              'curate your shoppable \n Treasury by adding treasures \n from across the web',
          },
        ]}
      />
    </>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  image: {
    width,
    marginBottom: 30,
    marginTop: 100,
    height: '100%',
  },
  buttonConatiner: {
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    fontSize: 17,
    fontWeight: '600',
  },
  doneButtonContainer: {
    width,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },
  doneButtonTextContainer: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    paddingVertical: 20,
    width: width - 50,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  doneButtonText: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
    fontFamily: 'Montserrat-Medium',
  },
  imageContainer: {
    width,
    height: height,
    alignItems: 'center',
    position: 'absolute',
    top: -height / 1.9,
    marginBottom: 30,
  },
});
