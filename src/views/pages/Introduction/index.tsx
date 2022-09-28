import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import photo from '../../../assets/images/Photo.png';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const Introduction = () => {
  const navigation = useNavigation();
  return (
    // <View style={{flex:1,backgroundColor:'black'}}>
    // <LinearGradient colors={['black', 'white', 'black']} style={styles.linearGradient}>

    <LinearGradient
      colors={['#000000', '#2E2E2E', '#000000']}
      style={styles.linearGradient}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}>
      <View style={{flex: 0.6, alignItems: 'center', marginBottom: 50}}>
        <Image source={photo} resizeMode="cover"></Image>
      </View>
      <View style={{flex: 0.2, marginTop: 50}}>
        <Text style={styles.headerView}>Treasury Collective</Text>
        <Text style={styles.lineView}>is a community for curators</Text>
        <Text style={styles.lineView}>
          to hunt treasures from past,present,
        </Text>
        <Text style={styles.lineView}>and future-and earn from</Text>
        <Text style={styles.lineView}>their good taste.</Text>
      </View>
      <View style={{marginTop: 80}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.button}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Onboarding')}
          style={styles.button1}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>

    //  </View>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  // image:{
  //   flex:0.5,
  //   margin:10
  // },
  headerView: {
    color: 'white',
    fontSize: 30,

    alignSelf: 'center',
    fontFamily: 'Playfair Display',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  lineView: {
    alignSelf: 'center',
    color: 'white',
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
