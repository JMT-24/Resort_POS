import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView, Switch, Image } from "react-native";
import styles from '../../styles/CheckInForm/CottagePickerModal';

interface Props {
  SetCottageNumber: (number: number) => void;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  reservedCottages: number[];
}

const CottagePickerModal: React.FC<Props> = ({ 
  modalVisible, setModalVisible, SetCottageNumber, reservedCottages }) => {
    var numOfCottages = 14;
    const cottages = Array.from({ length: numOfCottages }, (_, i) => i + 1);
    const isUnavailable = (cottages: number) => reservedCottages.includes(cottages);

    const getCottageNumber = (cottage: number) => {
      if (!isUnavailable(cottage)) {
        SetCottageNumber(cottage);
        console.log("Cottage number " +cottage+ " is picked");
        setModalVisible(false);
      }
    }
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
                  {cottages.map((cottage) => (
                    <TouchableOpacity
                      key={cottage}
                      style={[
                        styles.cottageBox,
                        isUnavailable(cottage) ? styles.unavailable : styles.available,
                      ]}
                      disabled={isUnavailable(cottage)}
                      onPress={() => getCottageNumber(cottage)}
                    >
                      <Text
                        style={[
                          styles.cottageText,
                          isUnavailable(cottage) ? { color: '#fff' } : { color: '#000' },
                        ]}
                      >
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
