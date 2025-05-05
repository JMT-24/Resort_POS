import React, {act, use, useEffect, useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, ImageSourcePropType } from 'react-native';
import styles from '../styles/MainContentStyles';
import Card from '../components/TransactCard';
import { getAllCheckIns, GuestCheckIn } from '../database/checkInSqlite';
import { getPriceList, PriceList } from '../database/priceListSQLite';
const searchIcon: ImageSourcePropType = require('../icons/searchIcon.png');

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

  const getHourDifference = (startTime: string, endTime: string) => {
    const parseTime = (timeStr: string) => {
      const [time, modifier] = timeStr.split(' ');
      let [hours, minutes] = time.split(':').map(Number);
  
      if (modifier === 'PM' && hours !== 12) hours += 12;
      if (modifier === 'AM' && hours === 12) hours = 0;
  
      return hours + minutes / 60;
    };
  
    const startHours = parseTime(startTime);
    const endHours = parseTime(endTime);
  
    return endHours - startHours;
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

  const [priceList, setPriceList] = useState<PriceList | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      const prices = await getPriceList();
      setPriceList(prices);
    };
  
    fetchPrices();
  }, []);

  const getPriceForLabel = (label: string): number => {
    if (!priceList) return 0;
  
    switch (label) {
      case 'Adults': return priceList.adults;
      case 'Senior': return priceList.senior;
      case 'Kids': return priceList.kids;
      case 'PWD': return priceList.pwd;
      case 'Cottages': return priceList.cottage;
      case 'Electric Charge': return priceList.electric;
      case 'Round Table': return priceList.roundTable;
      case 'Long Table': return priceList.longTable;
      case 'Chair': return priceList.chairs;
      case 'Cork Cage': return priceList.corkCage;
      default: return 0;
    }
  };


  const totalPrice = (
    adults: number,
    kids: number,
    senior: number,
    pwd: number,
    cottages: number,
    electricCharge: number,
    roundTable: number,
    longTable: number,
    chairs: number,
    corkCage: number
  ): number =>
    getPriceForLabel('Adults') * adults +
    getPriceForLabel('Kids') * kids +
    getPriceForLabel('Senior') * senior +
    getPriceForLabel('PWD') * pwd +
    getPriceForLabel('Cottages') * cottages +
    getPriceForLabel('Electric Charge') * electricCharge +
    getPriceForLabel('Round Table') * roundTable +
    getPriceForLabel('Long Table') * longTable +
    getPriceForLabel('Chair') * chairs +
    getPriceForLabel('Cork Cage') * corkCage;
  
  
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
            adults={item.guests.adult}
            kids={item.guests.kids}
            senior={item.guests.senior}
            pwd={item.guests.pwd}
            hours={getHourDifference(item.startTime, item.endTime)}
            time={`${item.startTime} - ${item.endTime}`}
            cottages={item.items.cottages}
            corkCage={item.items.corkCage}
            electricCharge={item.items.electric}
            roundTable={item.items.roundTable}
            longTable={item.items.longTable}
            chairs={item.items.chairs}
            downpayment={(totalPrice(item.guests.adult, item.guests.kids, item.guests.senior, item.guests.pwd, 
              item.items.cottages, item.items.electric, item.items.roundTable, item.items.longTable, item.items.chairs, 
              item.items.corkCage)) * 0.5}
            balance={totalPrice(item.guests.adult, item.guests.kids, item.guests.senior, item.guests.pwd, 
              item.items.cottages, item.items.electric, item.items.roundTable, item.items.longTable, 
              item.items.chairs, item.items.corkCage)}
            discounts={0}
            timestamp={item.timestamp}
            type={item.bookingType}
            status={item.status}
            guestID={item.id}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MainContent;
