import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, PanResponder } from "react-native";
import { Calendar } from "react-native-big-calendar";

// Sample events
const events = [
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

  // Function to navigate months
  const handleMonthChange = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  // PanResponder setup for swipe gestures
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {},
      onPanResponderRelease: (e, gestureState) => {
        // Check if the swipe is horizontal
        if (gestureState.dx > 50) {
          // Swiped right (next month)
          handleMonthChange(-1);
        } else if (gestureState.dx < -50) {
          // Swiped left (previous month)
          handleMonthChange(1);
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Left Arrow */}
        <TouchableOpacity onPress={() => handleMonthChange(-1)}>
          <Text style={styles.buttonText}>◀</Text>
        </TouchableOpacity>

        {/* Month and Year Text */}
        <Text style={styles.monthText}>
          {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
        </Text>

        {/* Right Arrow */}
        <TouchableOpacity onPress={() => handleMonthChange(1)}>
          <Text style={styles.buttonText}>▶</Text>
        </TouchableOpacity>
      </View>

      {/* Calendar Component inside ScrollView for horizontal scrolling */}
      <View
        style={styles.calendarContainer}
        {...panResponder.panHandlers} // Apply pan responder to detect swipes
      >
        <Calendar
          events={events}
          height={500} // Calendar height set to 700
          mode="month" // Display monthly view
          date={currentDate} // Update calendar date
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
  },
  monthText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff", // Blue color for buttons
  },
  calendarContainer: {
    marginTop: 20,
  },
});

export default CalendarScreen;
