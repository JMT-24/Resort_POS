import React, {act, use, useEffect, useState} from 'react';
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

  useEffect(() => {
    const fetchCheckIns = async () => {
      const data = await getAllCheckIns();
      setTransactions(data);
    };

    fetchCheckIns();
  }, []);
  
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
            cottageNumber={`Cottage Number ${item.cottageNumber}`}
            date="March 27 2025"
            adults={item.adult}
            kids={item.kids}
            senior={item.senior}
            pwd={item.pwd}
            hours={12}
            time="6:00am - 5:00pm"
            cottages={item.cottages}
            electricCharge={item.electric}
            roundTable={item.roundTable}
            longTable={0}
            monoBlock={item.monoBlock}
            chairs={item.chairs}
            others="-"
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
