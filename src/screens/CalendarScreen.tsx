import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
} from "react-native";
import { Calendar } from "react-native-big-calendar";
import BookingModal from "../components/BookingModal"; // Adjust path if needed

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
  const dateRef = useRef(currentDate); // holds the latest date always
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleMonthChange = (direction: number) => {
    const newDate = new Date(dateRef.current); // use ref instead of current state
    newDate.setDate(1);
    newDate.setMonth(newDate.getMonth() + direction);
    dateRef.current = newDate; // update the ref
    setCurrentDate(newDate);   // trigger re-render 
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return (
          Math.abs(gestureState.dx) > Math.abs(gestureState.dy) &&
          Math.abs(gestureState.dx) > 10 // Sensitive to light swipe
        );
      },
      onPanResponderRelease: (evt, gestureState) => {
        const swipeDistance = gestureState.dx;
        if (swipeDistance > 50) {
          handleMonthChange(-1); // Swipe right → previous month
        } else if (swipeDistance < -50) {
          handleMonthChange(1); // Swipe left → next month
        }
      },
      onPanResponderTerminationRequest: () => false,
    })
  ).current;

  const handlePressCell = (date: Date) => {
    setSelectedDate(date);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.monthText}>
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </Text>
      </View>

      {/* Optional arrow buttons */}
      <View style={styles.arrowContainer}>
        <Text style={styles.arrow} onPress={() => handleMonthChange(-1)}>←</Text>
        <Text style={styles.arrow} onPress={() => handleMonthChange(1)}>→</Text>
      </View>

      {/* Calendar with swipe handler */}
      <View style={styles.calendarContainer} {...panResponder.panHandlers}>
        <Calendar
          events={events}
          height={750}
          mode="month"
          date={currentDate}
          onPressCell={handlePressCell}
        />
      </View>

      {/* Booking modal */}
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
