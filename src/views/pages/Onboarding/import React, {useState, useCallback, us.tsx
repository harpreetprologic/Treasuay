import React, {useState, useCallback, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import photo from 'assets/images/Photo.png';
import * as yup from 'yup';
import TextField from 'views/components/inputs/TextField';
import {
  background,
  color,
} from 'native-base/lib/typescript/theme/styled-system';
import LinearGradient from 'react-native-linear-gradient';
import SafeAreaView from 'react-native-safe-area-view';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
// import Carousel from 'react-native-snap-carousel';
import Onboarding from 'react-native-onboarding-swiper';

const {width, height} = Dimensions.get('window');

const OnboardingApp = () => {
  const Next = ({...props}) => (
    <TouchableOpacity
      style={{
        backgroundColor: '#000',
        marginVertical: 10,
        width: 70,
      }}>
      <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
        Next
      </Text>
    </TouchableOpacity>
  );
  const Skip = ({...props}) => (
    <TouchableOpacity
      style={{
        backgroundColor: '#000',
        marginHorizontal: 10,
        width: 70,
      }}>
      <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
        Skip
      </Text>
    </TouchableOpacity>
  );
  const Dots = ({...props}) => (
    <TouchableOpacity
      style={{
        marginBottom: 49,
        shadowColor: 'white',
      }}></TouchableOpacity>
  );
  return (
    //     <LinearGradient
    //        colors={['#000000', '#2E2E2E', '#000000']}
    //      style={styles.linearGradient}
    // start={{x: 0, y: 0.5}}
    //      end={{x: 1, y: 0.5}}>
    //        <SafeAreaView forceInset={{top: 'always'}}>
    // //         <View
    //       style={{
    //         alignItems: 'center',
    //         width: '100%',
    //         height: height / 3,
    //         backgroundColor: 'red',
    //         marginBottom: 40,
    //       }}>
    //       <Image
    //         source={photo}
    //         resizeMode="cover"
    //         style={{width: '100%', height: '100%'}}></Image>
    //     </View>
    //     <View style={{marginTop: 20}}>
    //       <Text style={styles.headerView}>Treasury Collective</Text>
    //       <Text style={styles.lineView}>is a community for curators</Text>
    //       <Text style={styles.lineView}>to discover,collect,and shop</Text>
    //       <Text style={styles.lineView}>treasures from past,present,</Text>
    //       <Text style={styles.lineView}>and future.</Text>
    //     </View>
    <LinearGradient
      colors={['#000000', '#2E2E2E', '#000000']}
      style={styles.linearGradient}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}>
      {/* <SafeAreaView forceInset={{top: 'always'}}> */}
      <Onboarding
        NextButtonComponent={Next}
        SkipButtonComponent={Skip}
        DotComponent={Dots}
        pages={[
          {
            backgroundColor: 'transparent',
            image: (
              <Image
                source={photo}
                resizeMode="cover"
                style={{
                  justifyContent: 'flex-start',
                  alignContent: 'flex-start',
                  alignSelf: 'flex-start',
                }}></Image>
            ),
            title: <Text style={styles.headerView}>Treasury Collective</Text>,
            subtitle: (
              <View>
                <Text style={styles.lineView}>is a community for curators</Text>
                <Text style={styles.lineView}>
                  to discover,collect,and shop
                </Text>
                <Text style={styles.lineView}>
                  treasures from past,present,
                </Text>
                <Text style={styles.lineView}>and future.</Text>
              </View>
            ),
          },
          {
            backgroundColor: 'transparent',
            image: (
              <Image source={require('../../../assets/images/board-2.png')} />
            ),
            title: <Text style={styles.headerView1}>Hunt</Text>,
            subtitle: (
              <View>
                <Text style={styles.lineView1}>for treasures to shop</Text>
                <Text style={styles.lineView1}>and tastemakers to follow</Text>
              </View>
            ),
          },
          {
            backgroundColor: 'transparent',
            image: (
              <Image source={require('../../../assets/images/board-3.png')} />
            ),
            title: <Text style={styles.headerView1}>Treasury</Text>,
            subtitle: (
              <View>
                <Text style={styles.lineView1}>curate your shoppable</Text>
                <Text style={styles.lineView1}>
                  Treasury by adding treasures
                </Text>
                <Text style={styles.lineView1}>from across the web</Text>
              </View>
            ),
          },
        ]}
        imageContainerStyles={{zIndex: 1}}
        containerStyles={{
          justifyContent: 'flex-start',

          zIndex: 1,
        }}
      />
      {/* </SafeAreaView> */}
    </LinearGradient>
  );
};
export default OnboardingApp;
const styles = StyleSheet.create({
  //  image:{
  //   //   flex:0.5,
  //   //   margin:10
  //   // },
  headerView: {
    color: '#fff',
    fontSize: 30,
    alignSelf: 'center',
    fontFamily: 'Playfair Display',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  headerView1: {
    color: '#fff',
    fontSize: 30,
    alignSelf: 'center',
    fontFamily: 'Playfair Display',
    fontStyle: 'italic',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: height * 0.42,
  },
  lineView1: {
    color: '#fff',

    alignSelf: 'center',
    // color: 'black',
    fontFamily: 'Playfair Display',
    fontSize: 23,
    bottom: height * 0.48,
  },
  lineView: {
    color: '#fff',

    alignSelf: 'center',
    // color: 'black',
    fontFamily: 'Playfair Display',
    fontSize: 23,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    // padding: 10,
    height: 45,
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 7,
  },
  button1: {
    alignItems: 'center',
    backgroundColor: 'black',
    // padding: 10,
    height: 45,
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 7,
    borderColor: 'white',
    borderWidth: 1,
  },
  linearGradient: {
    flex: 1,
  },
});
