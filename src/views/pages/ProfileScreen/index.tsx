import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import NoteIcons from 'react-native-vector-icons/SimpleLineIcons';
import Iconsbar from 'react-native-vector-icons/Octicons';
import Icons from 'react-native-vector-icons/AntDesign';

const ProfileScreen = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [password, setPassword] = React.useState(' ');

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <LinearGradient
          start={{x: 0.1, y: 0.25}}
          end={{x: 0.5, y: 1.1}}
          locations={[0, 0.5, 0.6]}
          colors={['#1770f6', '#3a629f', '#3a629f']}
          style={styles.linearGradient}>
          {/* <View
            style={{
              borderBottomWidth: 1,
              borderTopWidth: 1,
              height: 45,
              justifyContent: 'space-between',
              borderColor: '#C4C4C4',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 5,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('MyTreasury')}>
              <Icons name="left" size={19} color="#C4C4C4" />
            </TouchableOpacity>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 22,
                //   fontWeight: '600',
                fontStyle: 'normal',
                fontFamily: 'Playfair Display',
                color: 'white',
                fontWeight: 'bold',
              }}>
              Profile
            </Text>
            <TouchableOpacity>
              <Iconsbar name="three-bars" size={19} color="#C4C4C4" />
            </TouchableOpacity>
          </View> */}

          <View
            style={{
              width: '28%',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 15,
            }}>
            <TouchableOpacity>
              <ImageBackground
                style={{
                  height: 80,
                  width: 80,
                  // resizeMode: 'stretch',
                  borderRadius: 500,
                  borderColor: 'black',
                  alignSelf: 'center',
                  borderWidth: 2,
                  justifyContent: 'flex-end',

                  // borderWidth: 1,
                }}
                source={require('../../../assets/images/profile.png')}>
                <TouchableOpacity
                  style={{
                    // padding: 4,
                    alignSelf: 'flex-end',
                  }}>
                  <NoteIcons name="note" size={20} color="black" />
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <Text
                style={{
                  color: 'white',
                  marginTop: 11,
                  fontSize: 20,
                }}>
                Adam
              </Text>
              {/* <TouchableOpacity style={{marginTop: 11, padding: 3}}>
                <NoteIcons name="note" size={18} color="white" />
              </TouchableOpacity> */}
            </View>
          </View>
          {/* <View style={{marginStart: 5, marginTop: 15, width: '90%'}}>
            <Text style={{color: '#cdd8e7', fontSize: 12}}>
              Hi! Welcome to my Treasury. I'm a singer-songwiter
            </Text>
            <Text style={{color: '#cdd8e7', fontSize: 12, paddingTop: 5}}>
              based in Los Angeles carving space in the industry.
            </Text>
            <Text style={{color: '#cdd8e7', fontSize: 11, paddingTop: 5}}>
              My style is born from vintage wintage shops from around the
            </Text>
            <Text
              style={{
                color: '#cdd8e7',
                fontSize: 12,
                paddingTop: 5,
                marginBottom: 5,
              }}>
              world.
            </Text>
          </View> */}
        </LinearGradient>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 22, fontWeight: '600'}}>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Enter your full name"
          />

          <Text style={{fontSize: 22, fontWeight: '600', marginTop: 5}}>
            Email
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter your email"
          />
          {/* <Text style={{fontSize: 22, fontWeight: '600', marginTop: 5}}>
            Address
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setAddress}
            value={address}
            placeholder="Enter your address"
          /> */}
          <Text style={{fontSize: 22, fontWeight: '600', marginTop: 5}}>
            Phone Number
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setNumber}
            value={number}
            placeholder="Enter your phone number"
          />
          <Text style={{fontSize: 22, fontWeight: '600', marginTop: 5}}>
            Bio details
          </Text>
          {/* <TextInput
            style={styles.input1}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter your password"
          /> */}
          <TouchableOpacity>
            <View style={{marginStart: 5, marginTop: 15, width: '90%'}}>
              <Text style={{color: '#d4d4d4', fontSize: 12}}>
                Hi! Welcome to my Treasury. I'm a singer-songwiter
              </Text>
              <Text style={{color: '#d4d4d4', fontSize: 12, paddingTop: 5}}>
                based in Los Angeles carving space in the industry.
              </Text>
              <Text style={{color: '#d4d4d4', fontSize: 11, paddingTop: 5}}>
                My style is born from vintage wintage shops from around the
              </Text>
              <Text
                style={{
                  color: '#d4d4d4',
                  fontSize: 12,
                  paddingTop: 5,
                  marginBottom: 5,
                }}>
                world.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '100%',
              borderWidth: 1,
              alignItems: 'center',
              height: 30,
              justifyContent: 'center',
              marginTop: 15,
              backgroundColor: '#3a629f',
            }}>
            <Text style={{fontSize: 17, color: 'white'}}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  input: {
    height: 40,
    marginTop: 10,
    borderBottomWidth: 1,
    padding: 5,
  },
  input1: {
    height: 80,
    marginTop: 10,
    borderBottomWidth: 1,
    padding: 5,
  },
});
