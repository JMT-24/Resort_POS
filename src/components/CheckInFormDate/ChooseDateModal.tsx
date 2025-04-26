import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView, Switch, Image } from "react-native";
import styles from '../../styles/CheckInFormDate/ChooseDateStyles';
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";

interface Props {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  setStartTimeCustom: (text: string) => void;
  setEndTimeCustom: (text: string) => void;
  setStartTimeManual: (text: string) => void;
  setEndTimeManual: (text: string) => void;
}

const ChooseDateModal: React.FC<Props> = ({ modalVisible, setModalVisible, setStartTimeCustom, setEndTimeCustom,
  setStartTimeManual, setEndTimeManual
 }) => {

  const logThings = () => {
    console.log(setStartTimeCustom + ' AND ' + setEndTimeCustom)
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
            <ScrollView contentContainerStyle={styles.scrollContainer}> 
                <View style={styles.scrollContent}>

                    <View style={styles.topView}>
                        <View style={styles.headerView}>
                            <Text style={styles.headerText}>Choose Days</Text>
                            <Text style={styles.headersubText}>Select date and time for the appointment</Text>
                        </View>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.exitbtn}>
                            <Text style={styles.exitbtnText}>X</Text>
                        </TouchableOpacity>
                    </View>

                    <DatePicker setModalVisible={setModalVisible}/>
                    <TimePicker modalVisible setStartTimeCustom={setStartTimeCustom} setEndTimeCustom={setEndTimeCustom}
                    setStartTimeManual={setStartTimeManual} setEndTimeManual={setEndTimeManual}/>

                    <View style={styles.buttonView}>
                      <TouchableOpacity style={styles.cancelbtn} onPress={() => setModalVisible(false)}>
                        <Text style={styles.btnText}>Cancel</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.applybtn} onPress={() => logThings()}>
                        <Text style={styles.btnText}>Apply</Text>
                      </TouchableOpacity>
                    </View>
                    
                </View>
            </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ChooseDateModal;
