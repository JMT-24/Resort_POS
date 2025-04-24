import React, { useState, useRef } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import {
  StyleSheet,
  PanResponder,
} from "react-native";
import { Calendar } from "react-native-big-calendar";
import BookingModal from "../components/BookingModal";

import searchIcon from "../icons/searchIcon.png";

const allEvents = [
  {
    title: "Meeting",
    start: new Date(2024, 3, 2, 10, 0),
    end: new Date(2024, 3, 2, 11, 0),
  },
  {
    title: "Conference",
    start: new Date(2024, 3, 5, 14, 0),
    end: new Date(2024, 3, 5, 16, 0),
  },
];

const CalendarScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [searchText, setSearchText] = useState("");
  const dateRef = useRef(currentDate);
  
    const [search, setSearch] = useState("");


    const searchPerson = () => {
      console.log("searching for: ", search);
    };

  const handleMonthChange = (direction: number) => {
    const newDate = new Date(dateRef.current);
    newDate.setDate(1);
    newDate.setMonth(newDate.getMonth() + direction);
    dateRef.current = newDate;
    setCurrentDate(newDate);
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return (
          Math.abs(gestureState.dx) > Math.abs(gestureState.dy) &&
          Math.abs(gestureState.dx) > 10
        );
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 50) handleMonthChange(-1);
        else if (gestureState.dx < -50) handleMonthChange(1);
      },
      onPanResponderTerminationRequest: () => false,
    })
  ).current;

  const handlePressCell = (date: Date) => {
    setSelectedDate(date);
    setModalVisible(true);
  };

  const filteredEvents = allEvents.filter((event) =>
    event.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
        <View style={styles.containerSearch}>
          <Image source={searchIcon} style={styles.searchIcon}/>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#339CFF"
            value={search}
            onChangeText={setSearch}
            style={styles.input}
          />
          <TouchableOpacity onPress={searchPerson} style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>

      {/* 🗓 Header */}
      <View style={styles.header}>
        <Text style={styles.monthText}>
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </Text>
      </View>

      {/* Arrows */}
      <View style={styles.arrowContainer}>
        <Text style={styles.arrow} onPress={() => handleMonthChange(-1)}>
          ←
        </Text>
        <Text style={styles.arrow} onPress={() => handleMonthChange(1)}>
          →
        </Text>
      </View>

      {/* 📅 Calendar */}
      <View style={styles.calendarContainer} {...panResponder.panHandlers}>
        <Calendar
          events={filteredEvents}
          height={750}
          mode="month"
          date={currentDate}
          onPressCell={handlePressCell}
        />
      </View>

      {/* 🗂 Booking Modal */}
      <BookingModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        selectedDate={selectedDate}
        bookingData={null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  containerSearch: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#2388FF',
    alignItems: 'center',
    margin: 10,
    width: "65%",
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2388FF',
    paddingHorizontal: 30,
    paddingVertical: 13,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  searchBar: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  input: {
    flex: 1,
    color: '#2388FF',
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 4,
    fontSize: 20,
  },
  searchIcon: {
    transform: [{scaleX: .5}, {scaleY: .5}],
  },
  header: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
  },
  monthText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  arrowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
  },
  arrow: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  calendarContainer: {
    marginTop: 20,
    flex: 1,
  },
});

export default CalendarScreen;