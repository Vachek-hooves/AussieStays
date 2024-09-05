import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import SafeLayout from '../Layout/SafeLayout';
import {Colors} from '../../constant/colors';

const CreateNewCityModal = ({
  closeModal,
  cityName,
  setCityName,
  createCity,
}) => {
  return (
    <SafeLayout style={{alignItems: 'center'}}>
      <View style={{justifyContent: 'center', flex: 1, gap: 30}}>
        <TextInput
          value={cityName}
          onChangeText={setCityName}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={createCity} style={styles.createBtn}>
          <Text style={styles.createBtnText}>Create City</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={closeModal} style={styles.closeBtn}>
        <Text style={styles.closeBtnText}>Close modal</Text>
      </TouchableOpacity>
    </SafeLayout>
  );
};

export default CreateNewCityModal;

const styles = StyleSheet.create({
  createBtn: {
    borderWidth: 2,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 20,
    borderRadius: 10,
    paddingVertical: 10,
    borderRadius: 90,
    backgroundColor: Colors.amethyst,
    borderColor: Colors.matteYellow,
    alignItems: 'center',
  },
  createBtnText: {
    fontSize: 18,
    padding: 5,
    fontWeight: '600',
    color: Colors.matteYellow,
  },
  closeBtn: {
    borderWidth: 2,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 20,
    borderRadius: 10,
    paddingVertical: 10,
    borderRadius: 90,
    position: 'absolute',
    bottom: '12%',
    right: '12%',
    backgroundColor: Colors.amethyst,
    borderColor: Colors.matteYellow,
  },
  closeBtnText: {
    fontSize: 18,
    padding: 5,
    fontWeight: '600',
    color: Colors.matteYellow,
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 20,
    borderRadius: 10,
    paddingVertical: 10,
    minWidth: 200,
    maxWidth: '90%',
    borderRadius: 90,
  },
});
