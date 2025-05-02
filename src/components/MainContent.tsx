import React, {act, use, useEffect, useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from '../styles/MainContentStyles';
import Card from '../components/TransactCard';
import { getAllCheckIns, GuestCheckIn } from '../database/checkInSqlite';
import searchIcon from "../icons/searchIcon.png";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('Check In');
  const [transactions, setTransactions] = useState<GuestCheckIn[]>([]);
  const [search, setSearch] = useState("");

  const searchPerson = () => {
    console.log("searching for: ", search);
  };

  const formatDate = (dateString: string) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    if (dateString === 'None') return '';
  
    const [, month, day] = dateString.split('-').map(Number);  // skip the year
    return `${months[month - 1]} ${day}`;
  };

  useFocusEffect(
    useCallback(() => {
      let isActive = true;
  
      const fetchCheckIns = async () => {
        if (!isActive) return;
        const data = await getAllCheckIns();
        setTransactions(data);
      };
  
      fetchCheckIns(); // fetch immediately on focus
  
      const interval = setInterval(fetchCheckIns, 3000); // repeat every 3 seconds
  
      return () => {
        isActive = false;     // stop any ongoing fetch
        clearInterval(interval); // clear timer when screen loses focus
      };
    }, [])
  );
  
  return (
    <View style={styles.mainContent}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={activeTab == "Check In" ? styles.activeTab : styles.inactiveTab} onPress={() => setActiveTab("Check In")}>
          <Text style={activeTab == "Check In" ? styles.activeTabText : styles. inactiveTabText}>Check In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={activeTab == "Check Out" ? styles.activeTab: styles.inactiveTab} onPress={() => setActiveTab("Check Out")}>
          <Text style={activeTab == "Check Out" ? styles.activeTabText : styles. inactiveTabText}>Check Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={activeTab == "Canceled" ? styles.activeTab: styles.inactiveTab} onPress={() => setActiveTab("Canceled")}>
          <Text style={activeTab == "Canceled" ? styles.activeTabText : styles. inactiveTabText}>Canceled</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={styles.container}>
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
        <Text style={styles.headerText}>Today   |   Upcomings</Text>
      </View>

      <ScrollView>
        {transactions.map((item) => (
          <Card
            key={item.id}
            guestName={`${item.firstname} ${item.lastname}`}
            referenceNumber={`0000${item.id}`}
            cottageNumber={`Cottage ${item.cottageNumbers.join(', ')}`}
            date={`${formatDate(item.startDate)} - ${formatDate(item.endDate)}`}
            adults={item.adult}
            kids={item.kids}
            senior={item.senior}
            pwd={item.pwd}
            hours={12}
            time={`${item.startTime} - ${item.endTime}`}
            cottages={item.cottages}
            corkCage={item.corkCage}
            electricCharge={item.electric}
            roundTable={item.roundTable}
            longTable={item.longTable}
            chairs={item.chairs}
            downpayment={1500}
            balance={1500}
            discounts={100}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MainContent;
