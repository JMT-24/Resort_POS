import React, { use, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView, Switch, Image } from "react-native";
import styles from '../../styles/CheckInForm/CottagePickerModal';

interface Props {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  reservedCottages: number[];
  setCottageNumbers: (numbers: number[]) => void;
}

const CottagePickerModal: React.FC<Props> = ({ 
  modalVisible, setModalVisible, reservedCottages, setCottageNumbers }) => {
    var numOfCottages = 14;
    const cottages = Array.from({ length: numOfCottages }, (_, i) => i + 1);

    const isUnavailable = (cottages: number) => reservedCottages.includes(cottages);
    const isPicked = (cottage: number) => tempPickedCottages.includes(cottage);
    const [tempPickedCottages, setTempPickedCottages] = useState<number[]>([]);

    const handlePickCottage = (cottageNum: number) => {
      if (tempPickedCottages.includes(cottageNum)) {
        // If already picked, remove it
        setTempPickedCottages(tempPickedCottages.filter(num => num !== cottageNum));
        console.log(cottageNum + " Is removed");
      } else {
        // If not picked yet, add it
        setTempPickedCottages([...tempPickedCottages, cottageNum]);
        console.log(cottageNum + " Is picked")
      }
    };

    useEffect(() => {
      console.log("Current picked cottages: ", tempPickedCottages);
    }, [tempPickedCottages]);

    const applyBtn = async() => {
      await setCottageNumbers(tempPickedCottages);
      console.log("Saved: " + tempPickedCottages);
      setModalVisible(false);
    };

    const cancelBtn = async() => {
      await setCottageNumbers([]);
      await setTempPickedCottages([]);
      console.log("Emptied picked cottages");
      setModalVisible(false);
    }; 

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
                        isUnavailable(cottage)
                          ? styles.unavailable
                          : isPicked(cottage)
                          ? styles.picked
                          : styles.available,
                      ]}
                      disabled={isUnavailable(cottage)}
                      onPress={() => handlePickCottage(cottage)}
                    >
                      <Text
                        style={[
                          styles.cottageText,
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
              <TouchableOpacity style={styles.cancelbtn} onPress={() => cancelBtn()}>
                <Text style={styles.btnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.applybtn} onPress={() => applyBtn()}>
                <Text style={styles.btnText}>Apply</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </Modal>
    );
  };

export default CottagePickerModal;
