import React, {useCallback, useState, Component} from 'react';
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
  ScrollView,
  FlatList,
  Platform,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import NoteIcons from 'react-native-vector-icons/SimpleLineIcons';
import {getProfile, updateProfile} from '../../../store/actions/authActions';
import {useSelector, useDispatch} from 'react-redux';
import {Formik, FormikProps, Field} from 'formik';
import * as yup from 'yup';
import PTextField from '../../../views/components/inputs/PTextField';
import Button from '../../../views/components/inputs/Button';
import PhotoModal from './PhotoModal';
import ImagePicker from 'react-native-image-crop-picker';
import {authorize} from 'react-native-app-auth';
import {BASE_URL} from '../../../../src/constants/keys';

const {width, height} = Dimensions.get('window');

type TFields = {
  name: string;
  about: string;
};

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const authReducer = useSelector((state: any) => state?.authReducer);
  const {isLoading, userDetails} = authReducer;
  const navigation: any = useNavigation();
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    about: yup.string().required('About is required'),
  });

  const lineargradient = useCallback(
    () => (
      <LinearGradient
        start={{x: 0.1, y: 0.25}}
        end={{x: 0.5, y: 1.1}}
        locations={[0, 0.5, 0.6]}
        colors={['#1770f6', '#3a629f', '#3a629f']}
        style={styles.linearGradient}>
        <View
          style={{
            width: '28%',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          <TouchableOpacity
            style={{width: '100%', height: 100}}
            onPress={() => setPhotoModalOpen(true)}>
            <ImageBackground
              style={{
                height: 80,
                width: 80,
                borderRadius: 100,
                borderColor: 'black',
                alignSelf: 'center',
                borderWidth: 2,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}
              imageStyle={{borderRadius: 100}}
              source={{uri: `${BASE_URL}/${userDetails.profilePic}`}}>
              <TouchableOpacity
                onPress={onSelectPhoto}
                // activeOpacity={0.8}
                style={{
                  paddingStart: 55,
                  alignSelf: 'flex-end',
                  width: '115%',
                  paddingLeft: 100,
                  paddingTop: 53,
                }}>
                <View
                  style={{
                    borderColor: 'white',
                    // borderWidth: 1,

                    borderRadius: 20,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    paddingStart: 2,
                    width: 30,
                    height: 30,
                    alignSelf: 'flex-end',
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#000a',
                      borderRadius: 30,
                    }}>
                    <NoteIcons
                      style={{
                        padding: 4,
                        paddingBottom: 6,
                        paddingStart: 12,
                        alignSelf: 'flex-start',

                        width: '100%',
                        height: '110%',
                        borderRadius: 60,
                        marginTop: 3,
                      }}
                      name="note"
                      size={18}
                      color="white"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Text
              style={{
                color: 'white',
                marginTop: 5,
                fontSize: 20,
              }}>
              {userDetails.name}
            </Text>
          </View>
        </View>
      </LinearGradient>
    ),
    [userDetails.name, userDetails.profilePic],
  );

  const usedetail = useCallback(
    () => (
      <View style={{padding: 9}}>
        <Formik
          initialValues={{
            name: userDetails.name ?? '',
            about: userDetails.about ?? '',
          }}
          onSubmit={(values: {name: string; about: string}) => {
            dispatch(updateProfile(values.name, values.about));
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
                component={PTextField}
                name="name"
                label="Name"
                placeholder="Your Name (Erin Waish)"
                variant="outlined"
                // backgroundColor="red"
                marginTop={0}
              />

              <Field
                component={PTextField}
                name="about"
                label="About"
                placeholder="Write your about..."
                multiline
                variant="outlined"
                marginTop={0}
              />

              <View>
                <Button
                  variant="primary"
                  label="Update"
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    ),
    [],
  );

  const onSelectPhoto = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      console.log('..image', image);
      const formdata = new FormData();
      formdata.append('profilePic', {
        uri: image.path,
        type: image.mime,
        name: image.filename,
      });

      console.log('..form', formdata);
      let res = await fetch('http://192.168.1.190:8000/api/auth/upload/', {
        method: 'put',
        body: formdata,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userDetails.token}`,
        },
      });

      let responseJson = await res.json();
      console.log('..response', responseJson);
      dispatch(getProfile());
    } catch (error: any) {
      console.log('...Error in onSelectPhoto', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <PhotoModal
        open={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
      />
      <ScrollView>
        {lineargradient()}
        {usedetail()}
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {},
  // text: {
  //   fontSize: 25,
  //   fontWeight: '500',
  // },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    // borderRadius: 5,
  },
  // input: {
  //   height: 40,
  //   marginTop: 10,
  //   borderBottomWidth: 1,
  //   padding: 5,
  // },
  // input1: {
  //   height: 80,
  //   marginTop: 10,
  //   borderBottomWidth: 1,
  //   padding: 5,
  // },
});
