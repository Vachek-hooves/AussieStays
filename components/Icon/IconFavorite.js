import {Image, TouchableOpacity} from 'react-native';
import {Colors} from '../../constant/colors';
import {useAussieContext} from '../../store/aussie_context';

const IconFavorite = ({isFavorite, hotelId, cityId}) => {
  const {addHotelToFavorite} = useAussieContext();

  function handleIsFavorite() {
    addHotelToFavorite(cityId, hotelId);
  }
  return (
    <TouchableOpacity onPress={handleIsFavorite}>
      <Image
        source={require('../../assets/icons/star.png')}
        style={{
          width: 30,
          height: 30,
          tintColor: isFavorite ? Colors.yellow : Colors.white + 90,
          //   tintColor: Colors.yellow,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconFavorite;
