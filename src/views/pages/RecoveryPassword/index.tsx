import React, {useState, useCallback, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import IconsBack from 'react-native-vector-icons/AntDesign';
import {useNavigation, NavigationContainer} from '@react-navigation/native';

const RecoveryPassword = () => {
  const [email, setEmail] = useState('');
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={{padding: 12, flex: 1}}>
      <View style={{padding: 12, flex: 1}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            width: '13%',
            height: '6%',
            marginRight: 5,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e1e1e1',
          }}
          hitSlop={{left: 10, top: 10, right: 10, bottom: 10}}>
          <IconsBack name="left" size={22} color="black" />
        </TouchableOpacity>
        <View
          style={{
            marginTop: 50,
            borderBottomWidth: 2,
            borderBottomColor: 'black',
            width: '45%',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Forgot Password
          </Text>
        </View>
        <Text style={{marginTop: 50, fontSize: 19}}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter Your Email"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('Otp')}
          style={{
            borderWidth: 1,
            marginTop: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            borderRadius: 30,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default RecoveryPassword;
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 10,

    padding: 10,
    borderBottomWidth: 1,
  },
});
