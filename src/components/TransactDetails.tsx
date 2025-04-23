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
                transactNum={10}
               />
              <InfoTable 
                adults={10}
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
