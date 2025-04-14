import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView, Switch, Image } from "react-native";
import styles from '../../styles/CheckInFormDate/ChooseDateStyles';
import { TextInput } from "react-native-gesture-handler";
import arrowLeft from '../../icons/arrowLeft.png';
import { Calendar } from "react-native-calendars";

interface Props {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const ChooseDate: React.FC<Props> = ({ modalVisible, setModalVisible }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previous => !previous);
  
  const [range, setRange] = useState({});
  // const handleDayPress = (day) => {
  //   // Add your range selection logic here
  // };

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
                      <Calendar
                        markingType={'period'}
                        markedDates={range}
                        // onDayPress={handleDayPress}
                        renderHeader={(date) => {
                          const monthNames = [
                            'January', 'February', 'March', 'April', 'May', 'June',
                            'July', 'August', 'September', 'October', 'November', 'December'
                          ];
                          const jsDate = new Date(date);
                          const month = monthNames[jsDate.getMonth()];
                          const year = jsDate.getFullYear();

                          return (
                            <Text style={{
                              fontSize: 24,
                              fontWeight: 'bold',
                              color: '#1E90FF',
                              textAlign: 'center',
                              paddingVertical: 10,
                            }}>
                              {month} {year}
                            </Text>
                          );
                        }}
                        renderArrow={(direction) => (
                          <Text style={{ fontSize: 40, color: '#1E90FF', paddingHorizontal: 10 }}>
                            {direction === 'left' ? '←' : '→'}
                          </Text>
                        )}
                        theme={{
                          backgroundColor: '#ffffff',
                          calendarBackground: '#ffffff',
                          textSectionTitleColor: '#b6c1cd',
                          selectedDayBackgroundColor: '#1E90FF',
                          selectedDayTextColor: '#ffffff',
                          todayTextColor: '#00adf5',
                          dayTextColor: '#2d4150',
                          textDisabledColor: '#d9e1e8',
                          monthTextColor: '#1E90FF',
                          textDayFontFamily: 'YourFont-Bold',
                          textMonthFontFamily: 'YourFont-Regular',
                          textDayHeaderFontFamily: 'YourFont-SemiBold',
                          textDayFontWeight: '600',
                          textMonthFontWeight: 'bold',
                          textDayHeaderFontWeight: '600',
                          textDayFontSize: 22,
                          textMonthFontSize: 26,
                          textDayHeaderFontSize: 22,
                        }}
                        style={styles.calendar}
                      />

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
