import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView, Switch, Image } from "react-native";
import styles from '../../styles/CheckInFormDate/ChooseDateStyles';
import { TextInput } from "react-native-gesture-handler";
import arrowLeft from '../../icons/arrowLeft.png';
import dropdownArrow from '../../icons/dropdownArrow.png';
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

  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const timeOptions = [
    '08:00 AM', '09:00 AM', '10:00 AM',
    '11:00 AM', '12:00 PM', '01:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleSelectTime = (selected: string) => {
    setStartTime(selected);

    // Set end time +1 hour (naive logic)
    const [hourStr, minPart] = selected.split(':');
    let hour = parseInt(hourStr);
    const isPM = selected.includes('PM');
    
    if (isPM && hour !== 12) hour += 12;
    if (!isPM && hour === 12) hour = 0;

    hour += 1;
    const newHour = hour % 24;
    const suffix = newHour >= 12 ? 'PM' : 'AM';
    const displayHour = ((newHour + 11) % 12 + 1).toString().padStart(2, '0');
    const newEndTime = `${displayHour}:${minPart.split(' ')[0]} ${suffix}`;

    setEndTime(newEndTime);
    setDropdownVisible(false);
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
                          <TouchableOpacity
                            style={[
                              styles.timePickerStyle,
                              {
                                backgroundColor: isEnabled? "#F1F3F7": "white"
                              }
                            ]}
                            onPress={() => {
                              if (!isEnabled) {
                                setDropdownVisible(true);
                              }
                            }}
                            activeOpacity={isEnabled ? 1 : 0.7}
                            >
                            <Text 
                              style ={
                                [
                                  styles.timePickerText,
                                  {
                                    color: isEnabled? "#6D758F" : "black",
                                  }
                                ]
                              }
                            >
                              {startTime || 'Start Time'}
                            </Text>
                            <Image source={dropdownArrow} style={styles.dropdownArrow}/>
                          </TouchableOpacity>
                          <Modal
                            visible={dropdownVisible}
                            transparent={true}
                            animationType="fade"
                            onRequestClose={() => setDropdownVisible(false)}
                            >
                            <TouchableOpacity
                              style={{
                                flex: 1,
                                justifyContent: 'center',
                                backgroundColor: 'rgba(0,0,0,0.4)',
                                padding: 30
                              }}
                              activeOpacity={1}
                              onPressOut={() => setDropdownVisible(false)}
                              >
                              <View style={{
                                backgroundColor: 'white',
                                borderRadius: 10,
                                padding: 20
                              }}>
                                {timeOptions.map((time) => (
                                  <TouchableOpacity key={time} onPress={() => handleSelectTime(time)} >
                                    <Text style={{ fontSize: 27, paddingVertical: 15 }}>{time}</Text>
                                  </TouchableOpacity>
                                ))}
                              </View>
                            </TouchableOpacity>
                          </Modal>

                          <Image source={arrowLeft} style={styles.arrowLeft}></Image>

                          <TouchableOpacity
                            style={[
                              styles.timePickerStyle,
                              {
                                backgroundColor: isEnabled ? '#F1F3F7' : 'white',
                              }
                            ]}
                            activeOpacity={1}
                          >
                            <Text style={
                              [
                                styles.timePickerText,
                                { color: isEnabled ? '#6D758F' : 'black' }
                              ]
                            }>
                              {endTime || 'End Time'}
                            </Text>
                          </TouchableOpacity>

                        </View>

                        <View style={styles.TimePickerManualView}>
                          <TextInput
                            style={[
                              styles.timePickerStyle,
                              {
                                backgroundColor: isEnabled? "white": "#F1F3F7",
                                color: isEnabled? "black" : "#6D758F",
                                
                              }
                            ]}
                            placeholder="0:00"
                            //value={selectedDate} 
                            editable={isEnabled}
                            pointerEvents={isEnabled ? 'none' : 'auto'}
                          />
                          <Image source={arrowLeft} style={styles.arrowLeft}></Image>
                          <TextInput
                            style={[
                              styles.timePickerStyle,
                              {
                                backgroundColor: isEnabled? "white": "#F1F3F7",
                                color: isEnabled? "black" : "#6D758F",
                              }
                            ]}
                            placeholder="0:00"
                            //value={selectedDate} 
                            editable={isEnabled}
                            pointerEvents={isEnabled ? 'none' : 'auto'}   
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
