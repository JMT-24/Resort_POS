import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView, Switch, Image } from "react-native";
import styles from '../../styles/CheckInForm/CottagePickerModal';

interface Props {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const CottagePickerModal: React.FC<Props> = ({ modalVisible, setModalVisible }) => {


  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.cottageView}>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>Choose Cottage Number</Text>
              <Text style={styles.headersubText}>kdkdkdkdkdk</Text>
            </View>
            <View style={styles.cottageGridView}>
              <View style={styles.cottagesGrid}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((cottage) => (
                    <TouchableOpacity 
                      key={cottage} 
                      style={[styles.cottageBox, (cottage % 5 === 0 || cottage % 9 === 0 || cottage === 10) ? styles.unavailable : styles.available]}
                    >
                      <Text style={[
                        styles.cottageText, 
                        (cottage % 5 === 0 || cottage % 9 === 0 || cottage === 10) ? { color: "#fff" } : { color: "#000" }
                      ]}>
                        {cottage}
                      </Text>
                    </TouchableOpacity>
                  ))}
              </View>
            </View>
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.cancelbtn} onPress={() => setModalVisible(false)}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applybtn}>
              <Text style={styles.btnText}>Apply</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </Modal>
  );
};

export default CottagePickerModal;
