import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { CardProps } from '../components/TransactCard';
import styles from '../styles/InvoiceStyles';

const TransactDetails: React.FC<CardProps> = (props) => {
  return (
    <View>
      {/* Modal for Transaction Details */}
      <Modal 
        animationType="fade" 
        transparent 
        visible={props.modalVisible} 
        onRequestClose={() => props.setModalVisible?.(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.header}>Invoice Details</Text>
            
            {/* Header Section */}
            <View style={styles.headerContainer}>
              <View style={styles.headerLeft}>
                <Text style={styles.label}>Guest Name: <Text style={styles.value}>{props.guestName}</Text></Text>
                <Text style={styles.label}>Reference No: <Text style={styles.value}>{props.referenceNumber}</Text></Text>
                <Text style={styles.label}>Date: <Text style={styles.value}>{props.date}</Text></Text>
              </View>
              <View style={styles.headerRight}>
                <Text style={styles.label}>Hours: <Text style={styles.value}>{props.hours}</Text></Text>
                <Text style={styles.label}>Time: <Text style={styles.value}>{props.time}</Text></Text>
                <Text style={styles.label}>Cottages: <Text style={styles.value}>{props.cottages}</Text></Text>
                <TouchableOpacity style={styles.printButton}>
                  <Text style={styles.printText}>Print</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            {/* Peoples Invoice Table */}
            <View style={styles.tableContainer}>
              <View style={styles.tableHeader}>
                <Text style={styles.columnHeader}>Item</Text>
                <Text style={styles.columnHeader}>QTY</Text>
                <Text style={styles.columnHeader}>Rate</Text>
                <Text style={styles.columnHeader}>Amount Paid</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Adults</Text>
                <Text style={styles.tableCell}>{props.adults}</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Kids</Text>
                <Text style={styles.tableCell}>{props.kids}</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Senior</Text>
                <Text style={styles.tableCell}>{props.senior}</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>PWD</Text>
                <Text style={styles.tableCell}>{props.pwd}</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
              </View>
            </View>
            
            {/* Items Invoice Table */}
            <View style={styles.tableContainer}>
              <View style={styles.tableHeader}>
                <Text style={styles.columnHeader}>Item</Text>
                <Text style={styles.columnHeader}>QTY</Text>
                <Text style={styles.columnHeader}>Rate</Text>
                <Text style={styles.columnHeader}>Amount Paid</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Cottages</Text>
                <Text style={styles.tableCell}>{props.cottages}</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Electric Charge</Text>
                <Text style={styles.tableCell}>{props.electricCharge}</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Round Table</Text>
                <Text style={styles.tableCell}>{props.roundTable}</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Long Table</Text>
                <Text style={styles.tableCell}>{props.longTable}</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>MonoBlock</Text>
                <Text style={styles.tableCell}>{props.monoBlock}</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Chairs</Text>
                <Text style={styles.tableCell}>{props.chairs}</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Others</Text>
                <Text style={styles.tableCell}>{props.others}</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
                <Text style={styles.tableCell}>₱N/A</Text>
              </View>
            </View>
            
            {/* Summary Table */}
            <View style={styles.summaryContainer}>
              <View style={styles.tableRow}>
                <Text style={styles.label}>Downpayment:</Text>
                <Text style={styles.value}>₱{props.downpayment}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.label}>Discount:</Text>
                <Text style={styles.value}>₱{props.discounts}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.label}>Balance:</Text>
                <Text style={styles.value}>₱{props.balance}</Text>
              </View>
            </View>
            
            <TouchableOpacity 
              onPress={() => props.setModalVisible?.(false)} 
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TransactDetails;
