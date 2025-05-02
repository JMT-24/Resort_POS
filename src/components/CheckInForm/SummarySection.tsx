// CheckInForm/SummarySection.tsx
import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../styles/CheckInForm/SummarySectionStyles';
import { saveCheckInData } from '../../database/checkInSqlite';
import { initializeDefaultPriceList } from '../../database/priceListSQLite';
import { getPriceList, PriceList } from '../../database/priceListSQLite';

interface GuestCounts {
  adult: number;
  senior: number;
  kids: number;
  pwd: number;
}

interface Charges {
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
  cottages: number;
  electric: number;
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
  cottages,
  electric,
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
    { label: 'Cottages', value: cottages },
    { label: 'Electric Charge', value: electric },
    { label: 'Round Table', value: charges.roundTable },
    { label: 'Long Table', value: charges.longTable },
    { label: 'Chair', value: charges.chairs },
    { label: 'Cork Cage', value: charges.corkCage },
  ];
  const handleSave = async() => {

    // await saveCheckInData(firstname, lastname, contactNo, address, guestCounts, charges, cottageNumbers, startDate,
    // endDate, startTime, endTime, isCustomTime);
    
    console.log('Saved to SQLite!');
    console.log(startDate + ' date and ' + endDate);
    console.log(startTime + ' time and ' + endTime);
    console.log(new Date() + " date now");
    console.log("Reserved Cottages: " + cottageNumbers);
    console.log("Custome Time " + isCustomTime);
    console.log(cottages + " cottages and " + electric);
    onConfirmClick();
    // initializeDefaultPriceList();
  };

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
                  <Text style={styles.summaryLabel}>
                    {`${getPriceForLabel(label) * value}`}
                    </Text>
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
