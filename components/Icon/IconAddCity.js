import {Image, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../constant/colors';
import {useAussieContext} from '../../store/aussie_context';

const IconAddCity = () => {
  const {createCity} = useAussieContext();
  function addCityCall() {
    createCity('Melbourne');
  }
  return (
    <TouchableOpacity
      onPress={addCityCall}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
        alignSelf: 'flex-end',
      }}>
      <Image
        source={require('../../assets/icons/city.png')}
        style={{
          width: 50,
          height: 50,
          tintColor: Colors.yellow,
          alignSelf: 'flex-end',
          //   margin: 30,
          marginRight: 5,
        }}
      />
      <Text style={{fontWeight: '900', fontSize: 32, color: Colors.yellow}}>
        +
      </Text>
    </TouchableOpacity>
  );
};

export default IconAddCity;
