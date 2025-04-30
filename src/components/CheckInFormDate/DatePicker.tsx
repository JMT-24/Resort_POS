import React, { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView, Switch, Image } from "react-native";
import styles from '../../styles/CheckInFormDate/DatePicker';
import { Calendar } from "react-native-calendars";

interface Props {
  setStartDateText: (text: string) => void;
  setEndDateText: (text: string) => void;
  startDateText: string;
  endDateText: string;
  modalVisible: boolean;
}

type CalendarDay = {
    dateString: string;
    day: number;
    month: number,
    year: number;
    timestamp: number;
};

export type DatePickerHandle = {
  rememberSavedDate: () => void;
}

const DatePicker = forwardRef<DatePickerHandle, Props>(({modalVisible, setStartDateText, setEndDateText, startDateText, endDateText }, ref) => {

  const rememberSavedDate = () => {
    //console.log("test");
  }

  useImperativeHandle(ref, () => ({
    rememberSavedDate,
  }));


  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);


  const onDayPress = (day: CalendarDay) => {
    const selectedDate = day.dateString;
    const today = new Date().toISOString().split('T')[0]; // Get today's date in "YYYY-MM-DD"
  
    if (selectedDate < today) {
      console.log('Cannot select a past date.');
      return; // 🚫 Block selecting past dates
    }
  
    if (!startDate || (startDate && endDate)) {
      setStartDate(selectedDate);
      setEndDate(null);
      setStartDateText(selectedDate);
      setEndDateText(selectedDate);
    } 
    else if (!endDate) {
      if (selectedDate < startDate) {
        setStartDate(selectedDate);
        setEndDate(startDate);
        setStartDateText(selectedDate);
        setEndDateText(startDate);
      } 
      else {
        setEndDate(selectedDate);
        setEndDateText(selectedDate);
      }
    }
  };
  

  const getMarkedDates = () => {
    if (!startDate) return {};
    const marked: { [key: string]: any } = {};
  
    if (!endDate) {
      // 1-day reservation
      marked[startDate] = {
        startingDay: true,
        endingDay: true,
        color: '#2388FF',
        textColor: 'white',
      };
    } else {
      const start = new Date(startDate);
      const end = new Date(endDate);
  
      for (
        let d = new Date(start);
        d <= end;
        d.setDate(d.getDate() + 1)
      ) {
        const dateStr = d.toISOString().split('T')[0];
  
        if (dateStr === startDate) {
          marked[dateStr] = {
            startingDay: true,
            color: '#2388FF',
            textColor: 'white',
          };
        } else if (dateStr === endDate) {
          marked[dateStr] = {
            endingDay: true,
            color: '#2388FF',
            textColor: 'white',
          };
        } else {
          marked[dateStr] = {
            color: '#F3F8FE',
            textColor: 'black',
          };
        }
      }
    }
  
    return marked;
  };

  
  useEffect(() => {
    if (modalVisible) {
      console.log(startDateText + ",real " +endDateText);
      // console.log(startDate + ",temp " + endDate);

      if ( (startDateText && endDateText) && (!(startDateText == "None") && !(endDateText == "None")) ) {
        if (startDateText === endDateText) {
          // 1-day reservation
          setStartDate(startDateText);
          setEndDate(null);
        } else {
          // Date range reservation
          setStartDate(startDateText);
          setEndDate(endDateText);
        }
      }
    }
    
  }, [modalVisible]);

  return (
        <View style={styles.middleView}>
            <View style={styles.calendarBox}>
            <Calendar
            markingType={'period'}
            markedDates={getMarkedDates()}
            onDayPress={onDayPress}
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
                textDayFontSize: 18,
                textMonthFontSize: 26,
                textDayHeaderFontSize: 15,
            }}
            style={styles.calendar}
            />

            </View>
            <Text>
                {startDate && endDate
                ? `Selected: ${startDate} to ${endDate}`
                : startDate
                ? `Start: ${startDate}`
                : 'Select a date range'}
            </Text>
        </View>
  );
});

export default DatePicker;
