import React, { use, useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView, Switch, Image } from "react-native";
import styles from '../../styles/CheckInFormDate/ChooseDateStyles';
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";

interface Props {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  setStartDate: (text: string) => void;
  setEndDate: (text: string) => void;
  setStartTime: (text: string) => void;
  setEndTime: (text: string) => void;
}

const ChooseDateModal: React.FC<Props> = ({ modalVisible, setModalVisible, setStartDate, setEndDate, setStartTime, setEndTime }) => {

  const applyBtn = async () => {
    console.log("Start Date: " +startDateTemp+ " End Date: " +endDateTemp);
    console.log("Start Time: " +startTimeTemp+ " End Time: " +endTimeTemp);
    await saveDateTime();
    setModalVisible(false);
    //make logic to prevent apply if date or time is missing
  }

  const cancelBtn = async () => {
    console.log('DateTimePicker Cancelled');
    await resetDateTime();
    setModalVisible(false);
    console.log("Start Date: " +startDateTemp+ " End Date: " +endDateTemp);
    console.log("Start Time: " +startTimeTemp+ " End Time: " +endTimeTemp);
  }

  const saveDateTime = () => {
    setStartDate(startDateTemp);
    setEndDate(endDateTemp);
    setStartTime(startTimeTemp);
    setEndTime(endTimeTemp);
  }

  const resetDateTime = () => {
    setStartDate('None');
    setEndDate('None');
    setStartTime('None');
    setEndTime('None');
    setStartDateTemp('None');
    setEndDateTemp('None');
    setStartTimeTemp('None');
    setEndTimeTemp('None');
  }


  const [startTimeTemp, setStartTimeTemp] = useState('None');
  const [endTimeTemp, setEndTimeTemp] = useState('None');
  const [startDateTemp, setStartDateTemp] = useState('None');
  const [endDateTemp, setEndDateTemp] = useState('None');

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
                        <TouchableOpacity onPress={() => cancelBtn()} style={styles.exitbtn}>
                            <Text style={styles.exitbtnText}>X</Text>
                        </TouchableOpacity>
                    </View>

                    <DatePicker setModalVisible={setModalVisible} setStartDateText={setStartDateTemp} setEndDateText={setEndDateTemp}/>
                    
                    <TimePicker modalVisible setStartTimeTemp={setStartTimeTemp} setEndTimeTemp={setEndTimeTemp}/>

                    <View style={styles.buttonView}>
                      <TouchableOpacity style={styles.cancelbtn} onPress={() => cancelBtn()}>
                        <Text style={styles.btnText}>Cancel</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.applybtn} onPress={() => applyBtn()}>
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
