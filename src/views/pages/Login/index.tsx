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
import React from 'react';
import photo from 'assets/images/Photo.png';
import {FormControl, Input, WarningOutlineIcon} from 'native-base';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import * as yup from 'yup';
import TextField from 'views/components/inputs/TextField';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import SafeAreaView from 'react-native-safe-area-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

type TFields = {
  email: string;
  password: string;
  passwordVisible: string;
};

const Login = () => {
  const navigation = useNavigation();
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <View>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            height: height / 3,
            backgroundColor: 'red',
            marginBottom: 40,
          }}>
          <Image
            source={photo}
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}></Image>
        </View>
        <View style={{padding: 17}}>
          {/* <Image
            style={{height: 25}}
            source={require('../../../assets/icons/email.png')}></Image> */}

          <Formik
            initialValues={{
              email: '',
              password: '',
              passwordVisible: '',
            }}
            onSubmit={(values: {
              email: string;
              password: string;
              passwordVisible: string;
            }) => console.log(values)}
            validationSchema={validationSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }: FormikProps<TFields>) => (
              <>
                <Field
                  component={TextField}
                  name="email"
                  placeholder="Email Address"
                  keyboardType="email-address"
                  leftIcon={() => (
                    <MaterialCommunityIcons
                      name="email"
                      size={16}
                      color="#000"
                    />
                  )}
                  // rightIcon={() => (
                  //   <MaterialCommunityIcons
                  //     name="check"
                  //     size={16}
                  //     color="#000"
                  //   />
                  // )}
                />
                <Field
                  component={TextField}
                  name="password"
                  placeholder="Password"
                  // secureTextEntry={passwordVisible}
                  leftIcon={() => (
                    <MaterialCommunityIcons
                      name="lock"
                      size={16}
                      color="#000"
                    />
                  )}
                  isPassword={true}
                />
                <View>
                  <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                    <Text style={styles.forgotView}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={handleSubmit}
                  disabled={!isValid}
                  // onPress={() => navigation.navigate('Login')}
                  style={styles.button}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>
                    Log in
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                    paddingHorizontal: 16,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#000',
                      width: '110%',
                      height: 1,
                    }}
                  />
                  <Text style={styles.orView}>or</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}
                    style={styles.button1}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: 'black',
                      }}>
                      Sign up
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* <Button type title="SIGN UP" disabled={!isValid} /> */}
              </>
            )}
          </Formik>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignSelf: 'flex-end',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'black',

    height: 45,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 7,
  },
  button1: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 45,
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 7,
    borderColor: 'black',
    borderWidth: 1,
  },
  forgotView: {
    fontSize: 16,
    height: 28,
    color: '#282828',
    marginTop: 10,
  },
  orView: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: '12%',
    fontSize: 20,
    position: 'absolute',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
});
