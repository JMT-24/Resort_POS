// CheckInForm/SummarySection.tsx
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../styles/CheckInFormStyles';

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
  monoBlock: number;
  chairs: number;
  corkCage: number;
}

interface SummarySectionProps {
  guestCounts: GuestCounts;
  charges: Charges;
}

const SummarySection: React.FC<SummarySectionProps> = ({ guestCounts, charges }) => {
  const summaryItems = [
    { label: 'Adults', value: guestCounts.adult },
    { label: 'Senior', value: guestCounts.senior },
    { label: 'Kids', value: guestCounts.kids },
    { label: 'PWD', value: guestCounts.pwd },
    { label: 'Cottages', value: charges.cottages },
    { label: 'E-Charge', value: charges.electric },
    { label: 'Round Table', value: charges.roundTable },
    { label: 'Mono Block', value: charges.monoBlock },
    { label: 'Chair', value: charges.chairs },
    { label: 'Cork Cage', value: charges.corkCage },
  ];

  return (
    <View style={styles.summaryBox}>
      <ScrollView style={{ height: '100%' }} contentContainerStyle={{ paddingBottom: 300 }}>
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
        <TouchableOpacity style={styles.Confirmbtn}>
          <Text style={styles.ConfirmbtnText}>CONFIRM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SummarySection;
