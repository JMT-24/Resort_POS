import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView, Switch, Image } from "react-native";
import styles from '../../styles/CheckInFormDate/ChooseDateStyles';
import { TextInput } from "react-native-gesture-handler";
import arrowLeft from '../../icons/arrowLeft.png';

interface Props {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const ChooseDate: React.FC<Props> = ({ modalVisible, setModalVisible }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previous => !previous);

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

                    <View style={styles.middleView}>
                      <View style={styles.calendarBox}>

                      </View>
                    </View>

                    <View style={styles.bottomView}>

                      <View style={styles.bottTopView}>
                        <View style={styles.hourToggleView}>
                          <Switch
                            trackColor={{ false: '#ccc', true: '#007aff' }} // blue when active
                            thumbColor={isEnabled ? '#fff' : '#fff'} // white circle
                            ios_backgroundColor="#ccc"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={styles.hourTogglebtn}
                          />
                        </View>
                        <View style={styles.hourHeaderView}>
                          <Text style={styles.headerText}>Customize by hour</Text>
                          <Text style={styles.headersubText}>Set specific time ranges for your schedule</Text>
                        </View>
                      </View>

                      <View style={styles.bottBottView}>
                        <View style={styles.TimePickerView}>
                          <TextInput
                            style={styles.timePickerStyle}
                            placeholder="Start Time"
                            //value={selectedDate} 
                            editable={false}         
                            pointerEvents="none"   
                          />
                          <Image source={arrowLeft} style={styles.arrowLeft}></Image>
                          <TextInput
                            style={styles.timePickerStyle}
                            placeholder="End Time"
                            //value={selectedDate} 
                            editable={false}         
                            pointerEvents="none"   
                          />
                        </View>

                        <View style={styles.TimePickerView}>
                          <TextInput
                            style={styles.timePickerStyle}
                            placeholder="Start Time"
                            //value={selectedDate} 
                            editable={false}         
                            pointerEvents="none"   
                          />
                          <Image source={arrowLeft} style={styles.arrowLeft}></Image>
                          <TextInput
                            style={styles.timePickerStyle}
                            placeholder="End Time"
                            //value={selectedDate} 
                            editable={false}         
                            pointerEvents="none"   
                          />
                        </View>
                      </View>
                    </View>

                    <View style={styles.buttonView}>
                      <TouchableOpacity style={styles.cancelbtn}>
                        <Text style={styles.btnText}>Cancel</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.applybtn}>
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

export default ChooseDate;
