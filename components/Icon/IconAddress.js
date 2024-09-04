import {Image, TouchableOpacity} from 'react-native';
import {Colors} from '../../constant/colors';

const IconAddress = () => {
  return (
    <Image
      source={require('../../assets/icons/address.png')}
      style={{width: 40, height: 40, tintColor: Colors.amethyst}}
    />
  );
};

export default IconAddress;
