import React from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { CardProps } from '../components/TransactCard';
import styles from '../styles/InvoiceStyles';
import TransactInfo from './TransactionDetails/TransacInfo';
import InfoTable from './TransactionDetails/InfoTable';

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
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <TransactInfo
                guestName={props.guestName}
                referenceNum={props.referenceNumber}
                timestamp={props.timestamp}
               />
              <InfoTable 
                adults={props.adults}
                kids={props.kids}
                senior={props.senior}
                pwd={props.pwd}
                cottages={props.cottages}
                electricCharge={props.electricCharge}
                longTable={props.longTable}
                roundTable={props.roundTable}
                chairs={props.chairs}
                corkCage={props.corkCage}
              />

            </ScrollView>
            
          </View>
          <TouchableOpacity style={styles.closeBtn} onPress={() => props.setModalVisible?.(false)}>
            <Text style={styles.closeBtnText}>X</Text>
          </TouchableOpacity>
        </View>

      </Modal>
    </View>
  );
};

export default TransactDetails;
