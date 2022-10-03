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
import {updateProfile} from '../../../store/actions/authActions';
import {useSelector, useDispatch} from 'react-redux';
import {Formik, FormikProps, Field} from 'formik';
import * as yup from 'yup';
import TextField from '../../../views/components/inputs/TextField';
import Button from '../../../views/components/inputs/Button';
import PhotoModal from './PhotoModal';
import ImagePicker from 'react-native-image-crop-picker';

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
          <TouchableOpacity onPress={() => setPhotoModalOpen(true)}>
            <ImageBackground
              style={{
                height: 80,
                width: 80,
                borderRadius: 500,
                borderColor: 'black',
                alignSelf: 'center',
                borderWidth: 2,
                justifyContent: 'flex-end',
              }}
              source={require('../../../assets/images/profile.png')}>
              <TouchableOpacity
                onPress={onSelectPhoto}
                // activeOpacity={0.8}
                style={{
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
              {userDetails.name}
            </Text>
          </View>
        </View>
      </LinearGradient>
    ),
    [userDetails.name],
  );

  const usedetail = useCallback(
    () => (
      <View style={{padding: 10}}>
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
                component={TextField}
                name="name"
                label="Name"
                placeholder="Your Name (Erin Waish)"
                variant="outlined"
              />

              <Field
                component={TextField}
                name="about"
                label="About"
                placeholder="Write your about..."
                multiline
                variant="outlined"
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

  const onSelectPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
    // const formdata = new FormData();
    // formdata.append('profilePic', {
    //   uri: image.uri,
    //   type: image.type,
    //   name: image.fileName,
    // });

    // let res = await fetch(
    // api.put('auth/update/', {
    //   method: 'put',
    //   body: formdata,
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   }
    // });
    // let responseJson =await res.json();
    // console.log(responseJson."responseJson")
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
