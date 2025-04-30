import React, { use, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView, Switch, Image } from "react-native";
import styles from '../../styles/CheckInFormDate/ChooseDateStyles';
import DatePicker, {DatePickerHandle} from "./DatePicker";
import TimePicker from "./TimePicker";

interface Props {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  setStartDate: (text: string) => void;
  setEndDate: (text: string) => void;
  setStartTime: (text: string) => void;
  setEndTime: (text: string) => void;
  setIsCustomTime: (choice: boolean) => void;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

export type ChooseDateModalHandle = {
  resetDateTime: () => void;
  rememberSavedDatetime: () => void;
};

const ChooseDateModal = forwardRef<ChooseDateModalHandle, Props>(({
  modalVisible, setModalVisible, setStartDate, setEndDate, setStartTime, setEndTime,
  setIsCustomTime, startDate, endDate, startTime, endTime
}, ref) => {

  const resetDateTime = () => {
    setStartDate('None');
    setEndDate('None');
    setStartTime('None');
    setEndTime('None');
    setStartDateTemp('None');
    setEndDateTemp('None');
    setStartTimeTemp('None');
    setEndTimeTemp('None');
    setIsCustomTime(false);
    setIsCustomTimeTemp(false);
  }

  const rememberSavedDatetime = () => {
    chooseDateRef.current?.rememberSavedDate();
    //console.log("2 is called");
    //console.log(chooseDateRef.current);
  }

  useImperativeHandle(ref, () => ({
    resetDateTime,
    rememberSavedDatetime,
  }));

  const applyBtn = async () => {
    console.log("Start Date: " +startDateTemp+ " End Date: " +endDateTemp);
    console.log("Start Time: " +startTimeTemp+ " End Time: " +endTimeTemp);
    console.log("Custom " + isCustomTimeTemp);
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
    console.log("Custom " +isCustomTimeTemp);
  }

  const saveDateTime = () => {
    setStartDate(startDateTemp);
    setEndDate(endDateTemp);
    setStartTime(startTimeTemp);
    setEndTime(endTimeTemp);
    setIsCustomTime(isCustomTimeTemp);
  }

  const [startTimeTemp, setStartTimeTemp] = useState('None');
  const [endTimeTemp, setEndTimeTemp] = useState('None');
  const [startDateTemp, setStartDateTemp] = useState('None');
  const [endDateTemp, setEndDateTemp] = useState('None');
  const [isCustomTimeTemp, setIsCustomTimeTemp] = useState<boolean>(false);
  const chooseDateRef = useRef<DatePickerHandle>(null);

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

                    <DatePicker setStartDateText={setStartDateTemp} setEndDateText={setEndDateTemp} ref={chooseDateRef}
                    startDateText={startDate} endDateText={endDate} modalVisible={modalVisible}/>
                    
                    <TimePicker modalVisible={modalVisible} setStartTimeTemp={setStartTimeTemp} setEndTimeTemp={setEndTimeTemp}
                    setIsCustomTimeTemp={setIsCustomTimeTemp} isCustomTimeTemp={isCustomTimeTemp} savedStartTime={startTime}
                    savedEndTime={endTime}/>

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
});

export default ChooseDateModal;
