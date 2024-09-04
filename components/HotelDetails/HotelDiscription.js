import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../constant/colors';
import {IconReadMore} from '../Icon';

const HotelDiscription = ({text}) => {
  const [showText, setShowText] = useState(false);

  const toggleHeight = () => {
    setShowText(prevState => !prevState);
  };

  return (
    <View style={[styles.container, {height: showText ? null : 200}]}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
        <IconReadMore onPress={toggleHeight} />
      </View>
    </View>
  );
};

export default HotelDiscription;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white + 90,
    borderRadius: 12,
    padding: 15,
    // height: 200,
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  text: {
    lineHeight: 20,
    color: Colors.black,
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 20,
  },
});
