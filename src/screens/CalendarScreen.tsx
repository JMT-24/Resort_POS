import React, { useState, useRef } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import {
  StyleSheet,
  PanResponder,
} from "react-native";
import { Calendar } from "react-native-big-calendar";
import BookingModal from "../components/BookingModal";

import searchIcon from "../icons/searchIcon.png";


const CalendarScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [searchText, setSearchText] = useState("");
  const dateRef = useRef(currentDate);
  
  const [search, setSearch] = useState("");

  const allEvents = [
    {
      title: "Alexis Visperas",
      start: new Date(2025, 3, 2, 10, 0), // April 2, 2025
      end: new Date(2025, 3, 2, 19, 0),
      tag: "Booked",
    },
    {
      title: "Ronin Inovejas",
      start: new Date(2025, 3, 5, 14, 0), // April 5
      end: new Date(2025, 3, 9, 16, 0),   // April 9
      tag: "Reserved",
    },
    {
      title: "Gabriel Santos",
      start: new Date(2025, 4, 3, 9, 0),  // May 3
      end: new Date(2025, 4, 3, 17, 0),
      tag: "Upcoming",
    },
    {
      title: "Chloe Ramirez",
      start: new Date(2025, 4, 10, 12, 0), // May 10
      end: new Date(2025, 4, 10, 18, 0),
      tag: "Cancelled",
    },
    {
      title: "Isabella Cruz",
      start: new Date(2025, 4, 15, 8, 0), // May 15
      end: new Date(2025, 4, 15, 11, 0),
      tag: "Reserved",
    },
    {
      title: "Dylan Martinez",
      start: new Date(2025, 4, 20, 13, 0), // May 20
      end: new Date(2025, 4, 20, 20, 0),
      tag: "Booked",
    },
    {
      title: "Natalie Gomez",
      start: new Date(2025, 4, 25, 10, 0), // May 25
      end: new Date(2025, 4, 25, 18, 0),
      tag: "Upcoming",
    },
    {
      title: "Liam Navarro",
      start: new Date(2025, 5, 4, 9, 0), // June 4
      end: new Date(2025, 5, 4, 17, 0),
      tag: "Booked",
    },
    {
      title: "Sophia Dela Cruz",
      start: new Date(2025, 5, 9, 14, 0), // June 9
      end: new Date(2025, 5, 9, 19, 0),
      tag: "Upcoming",
    },
    {
      title: "Mason Reyes",
      start: new Date(2025, 5, 14, 10, 0), // June 14
      end: new Date(2025, 5, 14, 18, 0),
      tag: "Cancelled",
    },
    {
      title: "Ava Ramos",
      start: new Date(2025, 5, 21, 8, 0), // June 21
      end: new Date(2025, 5, 21, 12, 0),
      tag: "Reserved",
    },
    {
      title: "Ethan Bautista",
      start: new Date(2025, 5, 27, 11, 0), // June 27
      end: new Date(2025, 5, 27, 17, 0),
      tag: "Upcoming",
    },
  ];
  

  const tagColors = {
          Booked: '#2388FF',     // Blue
          Reserved: '#FFA500',   // Orange
          Cancelled: '#FF4C4C',  // Red
          Upcoming: '#00C851',   // Green
        };

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
          renderEvent={(event) => (
            <View >
              <Text style={{
                top: 40,
                fontSize: 14, // Bigger text
                fontWeight: 'bold',
                color: tagColors[event.tag] || '#888', // Text colored by tag
                backgroundColor: (tagColors[event.tag] || '#eee') + '33', // Light background using alpha
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 12,
                overflow: 'hidden', // Ensures background shape shows correctly
              }}>
                {event.tag}
              </Text>
              <Text style={{
                 top: 40,
                fontSize: 12, // Bigger title
                fontWeight: 'bold',
                color: '#000000',
              }}>
                {event.title}
              </Text> 
            </View>
          )}
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