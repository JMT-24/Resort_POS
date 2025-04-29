// CheckInForm/SummarySection.tsx
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../styles/CheckInForm/SummarySectionStyles';
import { saveCheckInData } from '../../database/checkInSqlite';

interface GuestCounts {
  adult: number;
  senior: number;
  kids: number;
  pwd: number;
}

interface Charges {
  cottages: number;
  electric: number;
  roundTable: number;
  longTable: number;
  chairs: number;
  corkCage: number;
}

interface SummarySectionProps {
  guestCounts: GuestCounts;
  charges: Charges;
  firstname: string;
  lastname: string;
  contactNo: string;
  address: string;
  cottageNumbers: number[];
  onConfirmClick: () => void;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  isCustomTime: boolean;
}

const SummarySection: React.FC<SummarySectionProps> = ({ 
  guestCounts,
  charges,
  firstname,
  lastname,
  contactNo,
  address, 
  cottageNumbers,
  onConfirmClick,
  startDate,
  endDate,
  startTime,
  endTime,
  isCustomTime,
}) => {
  const summaryItems = [
    { label: 'Adults', value: guestCounts.adult },
    { label: 'Senior', value: guestCounts.senior },
    { label: 'Kids', value: guestCounts.kids },
    { label: 'PWD', value: guestCounts.pwd },
    { label: 'Cottages', value: charges.cottages },
    { label: 'Electric Charge', value: charges.electric },
    { label: 'Round Table', value: charges.roundTable },
    { label: 'Long Table', value: charges.longTable },
    { label: 'Chair', value: charges.chairs },
    { label: 'Cork Cage', value: charges.corkCage },
  ];
  const handleSave = () => {

    // await saveCheckInData(firstname, lastname, contactNo, address, guestCounts, charges, cottageNumbers, isCustomTime);
    // console.log('Saved to SQLite!');
    console.log(startDate + ' date and ' + endDate);
    console.log(startTime + ' time and ' + endTime);
    console.log(new Date() + " date now");
    console.log("Reserved Cottages: " + cottageNumbers);
    console.log("Custome Time " + isCustomTime);
    onConfirmClick();
  };

  return (
    <View style={styles.summaryBox}>
      <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingBottom: 300 }}>
        <View style={styles.paymentDetailsSummary}>
          {summaryItems.map(({ label, value }) => (
            <View key={label} style={styles.detailSummaryField}>
              <View style={styles.formTogglePic}></View>
              <View style={styles.detail_miniField}>
                <Text style={styles.summaryLabel}>{label}</Text>
                <View style={styles.detail_subminiField}>
                  <Text>{value}x</Text>
                  <Text style={styles.summaryLabel}>1,500</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.paymentDetailsContainer}>
        <Text style={styles.paymentDetailHeader}>Payment Details</Text>
        <View style={styles.detailsField}>
          <Text style={styles.paymentDetailLabel}>Subtotal</Text>
          <Text style={styles.paymentDetailData}>98.00</Text>
        </View>
        <View style={styles.detailsField}>
          <Text style={styles.paymentDetailLabel}>Discount</Text>
          <Text style={styles.paymentDetailData}>0.00</Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.detailsField}>
          <Text style={styles.paymentDetailData}>Total</Text>
          <Text style={styles.paymentDetailData}>98.00</Text>
        </View>
        <TouchableOpacity style={styles.Confirmbtn} onPress={handleSave}>
          <Text style={styles.ConfirmbtnText}>CONFIRM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SummarySection;
