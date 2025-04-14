import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView, Switch, Image } from "react-native";
import styles from '../../styles/CheckInFormDate/DatePicker';
import { Calendar } from "react-native-calendars";

interface Props {
  setModalVisible: (visible: boolean) => void;
}

const DatePicker: React.FC<Props> = ({ setModalVisible }) => {
  
  const [range, setRange] = useState({});
  // const handleDayPress = (day) => {
  //   // Add your range selection logic here
  // };

  return (
        <View style={styles.middleView}>
            <View style={styles.calendarBox}>
            <Calendar
            markingType={'period'}
            markedDates={range}
            // onDayPress={handleDayPress}
            renderHeader={(date) => {
                const monthNames = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
                ];
                const jsDate = new Date(date);
                const month = monthNames[jsDate.getMonth()];
                const year = jsDate.getFullYear();

                return (
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: '#1E90FF',
                    textAlign: 'center',
                    paddingVertical: 10,
                }}>
                    {month} {year}
                </Text>
                );
            }}
            renderArrow={(direction) => (
                <Text style={{ fontSize: 40, color: '#1E90FF', paddingHorizontal: 10 }}>
                {direction === 'left' ? '←' : '→'}
                </Text>
            )}
            theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#b6c1cd',
                selectedDayBackgroundColor: '#1E90FF',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                monthTextColor: '#1E90FF',
                textDayFontFamily: 'YourFont-Bold',
                textMonthFontFamily: 'YourFont-Regular',
                textDayHeaderFontFamily: 'YourFont-SemiBold',
                textDayFontWeight: '600',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '600',
                textDayFontSize: 22,
                textMonthFontSize: 26,
                textDayHeaderFontSize: 22,
            }}
            style={styles.calendar}
            />

            </View>
        </View>
  );
};

export default DatePicker;
