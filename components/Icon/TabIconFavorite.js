import {Image} from 'react-native';

const TabIconFavorite = color => {
  return (
    <Image
      source={require('../../assets/icons/star.png')}
      style={{tintColor: color, width: 35, height: 35}}
    />
  );
};

export default TabIconFavorite;
