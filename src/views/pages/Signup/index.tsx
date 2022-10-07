import React, {useCallback} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import TextField from '../../../views/components/inputs/TextField';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {signup} from '../../../store/actions/authActions';

import Button from '../../../views/components/inputs/Button';

import {Formik, FormikProps, Field} from 'formik';
import * as yup from 'yup';

import photo from '../../../assets/images/Photo.png';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');
type TFields = {
  name: string;
  treasury_name: string;
  email: string;
  password: string;
  passwordVisible: string;
};

const Signup = () => {
  const dispatch = useDispatch();
  const authReducer = useSelector((state: any) => state?.authReducer);
  const {isLoading, userDetails} = authReducer;
  const navigation: any = useNavigation();
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  const logo = useCallback(
    () => (
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
    ),
    [],
  );

  const information = useCallback(
    () => (
      <View style={{padding: 17}}>
        <Formik
          initialValues={{
            name: '',
            treasury_name: '',
            email: '',
            password: '',
            passwordVisible: '',
          }}
          onSubmit={(values: {
            name: string;
            treasury_name: string;
            email: string;
            password: string;
            passwordVisible: string;
          }) => {
            dispatch(
              signup(
                values.name,
                values.treasury_name,
                values.email,
                values.password,
              ),
            );
          }}
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
                name="name"
                placeholder="Your Name (Erin Waish)"
                keyboardType="email-address"
                autoCapitalize="none"
                leftIcon={() => (
                  <Icons name="md-person-sharp" size={16} color="#000" />
                )}
              />

              <Field
                component={TextField}
                name="treasury_name"
                placeholder="Treasury Name (Erin Waish)"
                keyboardType="email-address"
                autoCapitalize="none"
                leftIcon={() => (
                  <Icons name="md-person-sharp" size={16} color="#000" />
                )}
              />
              <Field
                component={TextField}
                name="email"
                placeholder="Email Address"
                keyboardType="email-address"
                autoCapitalize="none"
                leftIcon={() => (
                  <MaterialCommunityIcons name="email" size={16} color="#000" />
                )}
              />
              <Field
                component={TextField}
                name="password"
                placeholder="Password"
                leftIcon={() => (
                  <MaterialCommunityIcons name="lock" size={16} color="#000" />
                )}
                isPassword={true}
              />

              <View>
                <TouchableOpacity
                  style={{alignSelf: 'flex-end'}}
                  onPress={() => navigation.navigate('Tabs')}>
                  <Text style={styles.forgotView}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Button
                  variant="primary"
                  label="Sign up"
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </View>

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

              <Button
                style={{marginTop: 24}}
                variant="outlined"
                label="Login"
                onPress={() => navigation.navigate('Login')}
              />
            </>
          )}
        </Formik>
      </View>
    ),
    [],
  );
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView>
        <View>
          {logo()}
          {information()}
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
export default Signup;
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
    backgroundColor: 'white',

    height: 45,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 7,
    borderWidth: 1,
  },
  button1: {
    alignItems: 'center',
    backgroundColor: 'black',
    height: 45,
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 7,

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
