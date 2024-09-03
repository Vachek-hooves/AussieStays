import {Image} from 'react-native';

const TabIconProfile = color => {
  return (
    <Image
      source={require('../../assets/icons/profile.png')}
      style={{tintColor: color, width: 35, height: 35}}
    />
  );
};

export default TabIconProfile;
