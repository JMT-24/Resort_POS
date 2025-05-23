  import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageSourcePropType, Image } from 'react-native';
import styles from '../styles/CardStyles';
import TransactDetails from '../components/TransactDetails';
import { clearAllData, deleteTransactionById } from '../database/checkInSqlite';

const profilePic: ImageSourcePropType = require('../img/rhenzie.png');  
const editIcon: ImageSourcePropType = require('../icons/editIcons.png');
const fullDetailsIcon: ImageSourcePropType = require('../icons/fullDetails.png');
const notesIcon: ImageSourcePropType = require('../icons/notes.png');
const startTimeIcon: ImageSourcePropType = require('../icons/startTimeIcon.png');
const remarksIcon: ImageSourcePropType = require('../icons/redRemarksIcon.png');
const checkIcon: ImageSourcePropType = require('../icons/checkIcon.png');


export interface CardProps {
  guestName: string;
  referenceNumber: string;
  cottageNumber: string;
  date: string;
  adults: number;
  kids: number;
  senior: number;
  pwd: number;
  hours: number;
  time: string;
  cottages: number;
  electricCharge: number;
  corkCage: number;
  roundTable: number;
  longTable: number;
  chairs: number;
  downpayment: number;
  balance: number;
  discounts: number;
  timestamp: string;
  modalVisible?: boolean;  // Add modalVisible as optional
  setModalVisible?: React.Dispatch<React.SetStateAction<boolean>>;  // Add setModalVisible as optional
  type: string;
  status: string;
  guestID: number
}

const DetailsRow: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <View style={styles.detailsRow}>
    <Text style={styles.detailsLabel}>{label}</Text>
    <Text style={styles.detailsValue}>{value}</Text>
  </View>
);

const DetailsRow2: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <View style={styles.detailsRow2}>
    <Text style={styles.detailsLabel}>{label}</Text>
    <Text style={styles.detailsValue}>{value}</Text>
  </View>
);

const Card: React.FC<CardProps> = (props) => {
  const [modalVisible, setModalVisible] = useState(false);  
  const [timeLeft, setTimeLeft] = useState(props.hours * 60 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hrs = Math.floor((seconds % (3600 * 24)) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(days)}: ${pad(hrs)}: ${pad(mins)}: ${pad(secs)}`;
  };

  const handleStartTimer = () => {
    setIsTimerRunning(true);
  };
  
  const formatDateFromString = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return ''; // Invalid date
    }
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 0-based months
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <View style={styles.card}>
      <View style={styles.topHeaderCont}>
        <View style={styles.guestTypeCont}>
          <Text style={styles.violetText}>{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</Text>
        </View>
        <View style={styles.timeCounterLabelCont}>
          <Text style={styles.timeCounterLabel}>Day</Text>
          <Text style={styles.timeCounterLabel}>Hr</Text>
          <Text style={styles.timeCounterLabel}>Min</Text>
          <Text style={styles.timeCounterLabel}>Sec</Text>
        </View>
      </View>
      <View style={styles.cardHeader}>
        <Text style={styles.guestName}>{props.guestName}</Text>
        <View style={styles.headerVioletCont}><Text style={styles.violetText}>{props.cottageNumber}</Text></View>
        <View style={styles.headerVioletCont}><Text style={styles.violetText}>{props.date}</Text></View>
        <View style={styles.headerVioletCont}><Text style={styles.violetText}>{formatTime(timeLeft)}</Text></View>
      </View>
      <Text style={styles.refNumber}>
        Reference No. <Text style={{ fontWeight: 'bold' }}>{props.referenceNumber}</Text>
      </Text>

      {/* Structured Details Grid */}
      <View style={styles.detailsGrid}>
        {/* First Row */}
        <DetailsRow label="Adults" value={props.adults} />
        <DetailsRow label="Kids" value={props.kids} />
        <DetailsRow label="Senior" value={`${props.senior} ID`} />
        <DetailsRow label="PWD" value={`${props.pwd} ID`} />
        <DetailsRow label="Hours" value={`${props.hours}hrs`} />
        <DetailsRow label="Time" value={props.time} />
        <View style={styles.hr} />

        {/* Second Row */}
        <DetailsRow label="Cottages" value={props.cottages} />
        <DetailsRow label="Electric Charge" value={props.electricCharge} />
        <DetailsRow label="Round Table" value={props.roundTable} />
        <DetailsRow label="Long Table" value={props.longTable} />
        <DetailsRow label="Chairs" value={props.chairs} />
        <DetailsRow label="Cork Cage" value={props.corkCage} />
        <View style={styles.hr} />
      </View>

      <View style={styles.detailsGrid2}>
        <View style={styles.leftBottomCont}>
          <View style={styles.otherChargesCont}>
            <DetailsRow2 label="Downpayment" value={`${props.downpayment} php`} />
            <DetailsRow2 label="Balance" value={`${props.balance} php`} />
          </View>
          <View>
            <View style={styles.assignStaffCont}>
              <View style={styles.assignContainer}>
                <View style={styles.profilePlaceholder}>
                  <Image style={styles.profilePic} source={profilePic} />
                </View>
                <View style={styles.assignTextContainer}>
                  <Text style={styles.staffName}>Staff Rhenzie</Text>
                  <Text style={styles.transactionDate}>Date Created {formatDateFromString(props.timestamp)}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.BottomRowCont}>
          <View>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={[styles.button, {borderColor: "#FF6666"}]}>
                <Image source={remarksIcon} style={styles.buttonIcon}/>
                <Text style={[styles.buttonText, {color: "#FF6666"}]}>Remarks</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}  onPress={() => setModalVisible(true)}>
                <Image source={fullDetailsIcon} style={styles.buttonIcon}/>
                <Text style={styles.buttonText}>Full Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Image source={editIcon} style={styles.buttonIcon}/>
                <Text style={styles.buttonText}>Edit Info</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button}>
                <Image source={notesIcon} style={styles.buttonIcon}/>
                <Text style={styles.buttonText}>Notes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleStartTimer}>
                <Image source={startTimeIcon} style={styles.buttonIcon}/>
                <Text style={styles.buttonText}>Start Time</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, {backgroundColor: "#22C55E", paddingRight: 0, paddingLeft: 10,}]}
                onPress={() => deleteTransactionById(props.guestID)}>
                <Text style={[styles.buttonText, {color: "white"}]}>Check Out</Text>
                <Image source={checkIcon} style={styles.checkIcon}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>

      <TransactDetails 
        {...props} 
        modalVisible={modalVisible}  
        setModalVisible={setModalVisible}  
      />

    </View>
  );
};

export default Card;
