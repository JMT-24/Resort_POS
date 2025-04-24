import React from 'react';
import { useState } from 'react';
import exitButton from '../components/assets/exit-button.png'


import {
  Modal,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';

const BookingModal = ({ visible, onClose }) => {
const [searchText, setSearchText] = useState("");

  const data = {
    name: "Angel Locsin",
    reference: "1234",
    status: "Upcoming",
    cottageNo: "2,6",
    hours: "22hrs",
    pax: "2pax",
    checkIn: "2PM",
    checkOut: "12NN",
    downpayment: "₱1,500",
    balance: "₱1,500",
    fullPayment: "",
    profileImage: require("../components/assets/avatar-rhenzie.png"),
  };

  const detailsBottom = [
    { iconCheck: '📅', labelCheck: 'Check-in', value: data.checkIn },
    { iconCheck: '📅', labelCheck: 'Check-out', value: data.checkOut },
  ];

  const detailsTop = [
    { icon: '🛏', label: 'Cottage No.', value: data.cottageNo },
    { icon: '⏱', label: 'Hours', value: data.hours },
    { icon: '👥', label: 'Persons', value: data.pax },
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

          

          {/* Check In and Out */}
          <View style={styles.gridContainer}>
            {detailsBottom.map((item, index) => (
              <View key={index} style={styles.detailRow}>
                <Text style={styles.iconCheck}>{item.iconCheck}</Text>
                <Text style={styles.labelCheck}>{item.labelCheck}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </View>
            ))}
          </View>

          
          <View style={styles.lineOne} />
          

          {/* Details */}
          <View style={styles.gridContainerDetails}>
            {detailsTop.map((item, index) => (
              <View key={index} style={styles.detailRow}>
                <Text style={styles.icon}>{item.icon}</Text>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.lineTwo} />
          
          {/* Payment */}
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>💵 Downpayment</Text>
            <Text style={styles.paymentGreen}>{data.downpayment}</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>💵 Balance</Text>
            <Text style={styles.paymentBalance}>{data.downpayment}</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>💳 Full Payment</Text>
            <Text style={styles.paymentGray}>{data.fullPayment}</Text>
          </View>

          <Pressable
            style={styles.closeBtn}
            onPress={onClose}
            accessibilityLabel="Close Booking Modal"
          >
            <Image source={exitButton} style={styles.exitButton} />
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
    width: "50%",
    height: "55%",
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
    top: 50,
    left: 95,
    width:64,
    height: 64,
    borderRadius: 25,
  },
  exitButton: {
    bottom: 10,
    left: 95,
    width:64,
    height: 64,
    borderRadius: 25,
  },
  nameBlock: {
    marginLeft: 10,
  },
  name: {
    top: 54,
    marginLeft: 105,
    fontWeight: "bold",
    fontSize: 24,
  },
  reference: {
    left: 460,
    top: 25,
    fontSize: 12,
    color: "#555",
  },
  bold: {
    fontWeight: "bold",
  },
  statusRow: {
    left: 100, 
    top: 60,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10, 
  },
  icon: {
    fontSize: 25,
    marginRight: 4,
  },
  iconCheck: {
    fontSize: 25,
    marginRight: 4,
  },
  statusText: {
    fontSize: 15,
    marginRight: 6,
  },
  statusTag: {
    left: 70,
    backgroundColor: "#ffefd5",
    color: "#ff8c00",
    fontWeight: "bold",
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 15,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 58,
    top: 80,
  },
  gridContainerDetails: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 58,
    top: 95,
  },
  detailRow: {
    top: 10,
    left: 100,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  labelCheck: {
    marginHorizontal: 4,
    fontSize: 15,
    color: "#555",
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
  lineOne: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    marginVertical: 10,
    top: 15,
  },
  lineTwo: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    marginVertical: 10,
    top: 35,
  },
  paymentRow: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
    left: 520,
    top: 125,
  },
  paymentLabel: {
    fontSize: 15,
    color: "#555",
  },
  paymentGreen: {
    color: "green",
    fontWeight: "bold",
    left: 8,
  },
  paymentBalance: {
    color: "green",
    fontWeight: "bold",
    left: 52,
  },
  paymentGray: {
    color: "#999",
    
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
    zIndex: 1,
  },
  
});

export default BookingModal;