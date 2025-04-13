import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';

const BookingModal = ({ visible, onClose, selectedDate, bookingData }) => {
  const data = {
    name: "Angel Locsin",
    reference: "1234",
    status: "Upcoming",
    room: "202",
    hours: "22hrs",
    pax: "2pax",
    checkIn: "2PM",
    checkOut: "12NN",
    downpayment: "₱1,500",
    fullPayment: "₱3,000",
    profileImage: require("./assets/avatar.png"),
  };

  const detailsTop = [
    { icon: '🛏', label: 'Room Type', value: data.room },
    { icon: '⏱', label: 'Hours', value: data.hours },
  ];

  const detailsBottom = [
    { icon: '👥', label: 'Persons', value: data.pax },
    { icon: '📅', label: 'Check-in', value: data.checkIn },
    { icon: '📅', label: 'Check-out', value: data.checkOut },
  ];

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalWrapper}>
        <View style={styles.modalContainer}>
          {/* Top Row */}
          <View style={styles.topRow}>
            <Image source={data.profileImage} style={styles.avatar} />
            <View style={styles.nameBlock}>
              <Text style={styles.name}>{data.name}</Text>
              <Text style={styles.reference}>
                Reference No. <Text style={styles.bold}>{data.reference}</Text>
              </Text>
            </View>
          </View>

          {/* Status */}
          <View style={styles.statusRow}>
            <Text style={styles.icon}>🕑</Text>
            <Text style={styles.statusText}>Status</Text>
            <Text style={styles.statusTag}>{data.status}</Text>
          </View>

          {/* Details */}
          {detailsTop.map((item, index) => (
            <View key={index} style={styles.detailRow}>
              <Text style={styles.icon}>{item.icon}</Text>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}

          {detailsBottom.map((item, index) => (
            <View key={index} style={styles.detailRow}>
              <Text style={styles.icon}>{item.icon}</Text>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}

          <View style={styles.line} />

          {/* Payment */}
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>💵 Downpayment</Text>
            <Text style={styles.paymentGreen}>{data.downpayment}</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>💳 Full Payment</Text>
            <Text style={styles.paymentGray}>{data.fullPayment}</Text>
          </View>

          {/* Close */}
          <Pressable
            style={styles.closeBtn}
            onPress={onClose}
            accessibilityLabel="Close Booking Modal"
          >
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    elevation: 5,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameBlock: {
    marginLeft: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  reference: {
    fontSize: 12,
    color: "#555",
  },
  bold: {
    fontWeight: "bold",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    fontSize: 16,
    marginRight: 4,
  },
  statusText: {
    fontSize: 14,
    marginRight: 6,
  },
  statusTag: {
    backgroundColor: "#ffefd5",
    color: "#ff8c00",
    fontWeight: "bold",
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 12,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginVertical: 4,
  },
  label: {
    marginHorizontal: 4,
    fontSize: 14,
    color: "#555",
  },
  value: {
    fontWeight: "bold",
    fontSize: 14,
    marginRight: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 10,
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  paymentLabel: {
    fontSize: 14,
    color: "#555",
  },
  paymentGreen: {
    color: "green",
    fontWeight: "bold",
  },
  paymentGray: {
    color: "#999",
  },
  closeBtn: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  closeText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default BookingModal;
