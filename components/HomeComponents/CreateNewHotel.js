import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import SafeLayout from '../Layout/SafeLayout';
import {Colors} from '../../constant/colors';
import ImagePicker from '../ui/ImagesPicker';

const CreateNewHotel = ({closeModal, onSubmit}) => {
  const [hotelName, setHotelName] = useState('');
  const [hotelAddress, setHotelAddress] = useState('');
  const [hotelMinPrice, setHotelMinPrice] = useState('');
  const [hotelMaxPrice, setHotelMaxPrice] = useState('');
  const [hotelDescription, setHotelDescription] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [images, setImages] = useState([]);

  const handleCreate = () => {
    const newHotel = {
      hotelId: new Date().toString(),
      isFavorite: false,
      name: hotelName,
      address: hotelAddress,
      price: {min: hotelMinPrice, max: hotelMaxPrice},
      description: hotelDescription,
      images: images, // Додайте URL-адреси зображень або залиште порожнім, якщо не потрібно
      coordinates: {latitude: latitude, longitude: longitude}, // Можливо, ви захочете додати координати
    };
    onSubmit(newHotel);
  };
  function imageHandler(image) {
    setImages(prevImage => [...prevImage, ...image]);
  }
  return (
    <SafeLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add New Hotel</Text>

            <TextInput
              style={styles.input}
              placeholder="Hotel name"
              value={hotelName}
              onChangeText={setHotelName}
            />
            <TextInput
              style={styles.input}
              placeholder="Hotel Address"
              value={hotelAddress}
              onChangeText={setHotelAddress}
            />
            <TextInput
              style={styles.input}
              placeholder="Min Price"
              value={hotelMinPrice}
              onChangeText={setHotelMinPrice}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Max Price"
              value={hotelMaxPrice}
              onChangeText={setHotelMaxPrice}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, {maxHeight: 110}]}
              placeholder="Description"
              value={hotelDescription}
              //   maxLength={150}
              onChangeText={setHotelDescription}
              multiline
            />
            <TextInput
              style={styles.input}
              placeholder="Latitude"
              value={latitude}
              onChangeText={setLatitude}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Longitude"
              value={longitude}
              onChangeText={setLongitude}
              keyboardType="numeric"
            />
            <ImagePicker
              style={styles.imagePicker}
              handleImage={image => imageHandler(image)}>
              Chose Images
            </ImagePicker>

            <View style={styles.buttonContainer}>
              <Button title="CANCEL" onPress={closeModal} color="red" />
              <Button title="CREATE" onPress={handleCreate} />
            </View>
          </View>
        </View>
      </ScrollView>
      <View></View>
      {/* <TouchableOpacity onPress={closeModal}>
        <Text>CLOSE MODAL</Text>
      </TouchableOpacity> */}
    </SafeLayout>
  );
};

export default CreateNewHotel;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: Colors.white + 90,
    borderRadius: 12,
  },
  modalContainer: {
    width: '90%',
    padding: 20,
    // backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 50,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: Colors.blueBottle + 60,
    borderWidth: 2,
    borderColor: Colors.matteYellow,
    color: Colors.amethyst,
    fontSize: 20,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagePicker: {
    // width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    // borderColor: 'gray',
    // borderRadius: 5,
    backgroundColor: Colors.blueBottle + 60,
    borderWidth: 2,
    borderColor: Colors.matteYellow,
    color: Colors.amethyst,
    fontSize: 20,
    fontWeight: '600',
    alignItems: 'center',
  },
});
