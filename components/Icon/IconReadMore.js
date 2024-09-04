import {Image, TouchableOpacity} from 'react-native';
import {Colors} from '../../constant/colors';

const IconReadMore = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('../../assets/icons/more.png')}
        style={{width: 30, height: 30, tintColor: Colors.amethyst}}
      />
    </TouchableOpacity>
  );
};

export default IconReadMore;
