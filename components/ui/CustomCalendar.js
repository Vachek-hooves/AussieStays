import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Colors} from '../../constant/colors';

const CustomCalendar = () => {
  const [selected, setSelected] = useState('');
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.header}>FIND YOUR DATE</Text>
      <Calendar
        style={styles.calendartContainer}
        theme={styles.calendarTheme}
      />
    </View>
  );
};

export default CustomCalendar;

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    color: Colors.amethyst,
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 5,
  },
  rootContainer: {marginTop: 20},
  calendartContainer: {
    borderRadius: 20,
    // borderWidth: 1,
    // height: 250,
    paddingBottom: 10,
  },
  calendarTheme: {
    // backgroundColor: Colors.white + 80,
    calendarBackground: Colors.white + 90,
    textDisableColor: Colors.inActive,
    todayTextColor: Colors.green,
    todayBackgroundColor: Colors.matteYellow,
  },
});
