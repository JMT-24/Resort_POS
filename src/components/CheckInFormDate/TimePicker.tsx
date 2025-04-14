import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView, Switch, Image } from "react-native";
import styles from '../../styles/CheckInFormDate/TimePicker';
import { TextInput } from "react-native-gesture-handler";
import arrowLeft from '../../icons/arrowLeft.png';
import dropdownArrow from '../../icons/dropdownArrow.png';

interface Props {
  modalVisible: boolean;
}

const TimePicker: React.FC<Props> = ( ) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previous => !previous);
  
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

    <View>
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

    </View>
  );
};

export default TimePicker;
