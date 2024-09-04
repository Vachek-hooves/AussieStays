import {StyleSheet, Text, TextInput, View, Button, Image} from 'react-native';
import React, {useState} from 'react';
import SafeLayout from '../components/Layout/SafeLayout';
import ImagePicker, {ImagesPicker} from '../components/ui/ImagesPicker';
import {Colors} from '../constant/colors';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleRegister = () => {
    if (!name || !photo) {
      Alert.alert('Please enter your name and select a photo.');
      return;
    }
    // Save the user data here or perform further actions
    Alert.alert('Registration Successful!', `Name: ${name}`);
  };

  return (
    <SafeLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={text => setName(text)}
        />

        <ImagePicker
          handleImage={images => setPhoto(images[0])}
          btnStyle={styles.imagePickerBtn}>
          <Text style={styles.text}>Select Photo</Text>
        </ImagePicker>

        {photo && (
          <Image
            source={{uri: photo}}
            style={styles.image}
            resizeMode="contain"
          />
        )}

        <Button title="SAVE" onPress={handleRegister} />
      </View>
    </SafeLayout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  imagePickerBtn: {
    backgroundColor: Colors.amethyst + 90,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 50,
    marginBottom: 20,
    alignSelf: 'center',
  },
  text: {color: Colors.matteYellow, fontWeight: '700', fontSize: 18},
});
