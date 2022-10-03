import {Modal, Center, Button, FormControl, Input} from 'native-base';
import React, {useState} from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';

const PhotoModal = ({open, onClose}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Center>
      <Modal
        isOpen={open}
        onClose={onClose}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onClose}>
          <Modal.Content style={{width: '100%', height: '60%'}}>
            /{/* <Modal.Header>Profile Image</Modal.Header> */}
            <Modal.Body style={{width: '100%', height: '100%'}}>
              <ImageBackground
                style={{
                  width: 400,
                  height: 400,
                  alignSelf: 'center',
                }}
                source={require('../../../assets/images/profile.png')}></ImageBackground>
            </Modal.Body>
          </Modal.Content>
        </TouchableOpacity>
      </Modal>
    </Center>
  );
};
export default PhotoModal;
