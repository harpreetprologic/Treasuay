import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBar from 'react-native-dynamic-search-bar';
import Icons from 'react-native-vector-icons/AntDesign';

const HuntSearch = () => {
  const [search, setSearch] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 12}}>
        <View
          style={[
            styles.input,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <TextInput
            // style={styles.input}
            onChangeText={setSearch}
            value={search}
            placeholder="Cherie Ba.."
            placeholderTextColor={'#656565'}
          />
          <TouchableOpacity>
            <Icons name="search1" size={20} color="#656565" />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity>
            <Text style={styles.TextView}>Recent Searches</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.TextView1}>Clear all</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HuntSearch;

const styles = StyleSheet.create({
  input: {
    height: 55,
    marginTop: 12,
    // borderWidth: 1,
    padding: 10,
    fontSize: 17,
    color: 'black',
    borderRadius: 10,
    backgroundColor: '#e1e1e1',
  },
  TextView: {
    color: '#9d9d9d',
    marginTop: 22,
    fontSize: 22,
  },
  TextView1: {
    color: '#9d9d9d',
    marginTop: 28,
    fontSize: 15,
  },
});
