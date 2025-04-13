import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/MainContentStyles';
import Card from '../components/TransactCard';

const MainContent = () => {
  return (
    <View style={styles.mainContent}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.activeTab}><Text style={[styles.tabText, { color: "black" }]}>Check In</Text></TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}><Text style={styles.tabText}>Check Out</Text></TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}><Text style={styles.tabText}>Canceled</Text></TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Today   |   Upcomings</Text>
      </View>

      <ScrollView>
        <Card
          guestName="Angel Cabalhin"
          referenceNumber="ZX7723345"
          room="Room 306 - Superior Room"
          date="March 27, 2025"
          adults={2}
          kids={5}
          senior={2}
          pwd={2}
          hours={12}
          time="6:00am - 5:00pm"
          cottages={2}
          electricCharge={5}
          roundTable={2}
          longTable={2}
          monoBlock={12}
          chairs={12}
          others="-"
          downpayment={1500}
          balance={1500}
          discounts={100}
        />
        <Card
          guestName="Hyrkan Gamez"
          referenceNumber="112123123"
          room="Room 307 - Common Room"
          date="March 55 2025"
          adults={2}
          kids={5}
          senior={2}
          pwd={2}
          hours={3}
          time="6:00am - 5:00pm"
          cottages={2}
          electricCharge={5}
          roundTable={2}
          longTable={2}
          monoBlock={12}
          chairs={12}
          others="-"
          downpayment={1500}
          balance={1500}
          discounts={100}
        />
      </ScrollView>
    </View>
  );
};

export default MainContent;
