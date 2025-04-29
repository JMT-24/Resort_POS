import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Switch, Image, ImageSourcePropType } from "react-native";
import styles from '../../styles/CheckInFormDate/TimePicker';
import { TextInput } from "react-native-gesture-handler";
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';

const arrowLeft: ImageSourcePropType = require('../../icons/arrowLeft.png');
const dropdownArrow: ImageSourcePropType = require('../../icons/dropdownArrow.png');

interface Props {
  modalVisible: boolean;
  setStartTimeTemp: (text: string) => void;
  setEndTimeTemp: (text: string) => void;
  setIsCustomTimeTemp: (choice: boolean) => void;
  isCustomTimeTemp: boolean;
}

const TimePicker: React.FC<Props> = ({ setStartTimeTemp, setEndTimeTemp, setIsCustomTimeTemp, isCustomTimeTemp }) => {
  const toggleSwitch = () => setIsCustomTimeTemp(!isCustomTimeTemp);
  
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const timeOptions = [
    'DAYTIME: 8:00 AM - 6:00 PM',
    'NIGHT: 3:00 PM - 11:00 PM' 
  ];

  const handleSelectTime = (selected: string) => {
    const [, timeRange] = selected.split(': ');
    const [startTime, endTime] = timeRange.split(' - ');
  
    setStartTime(startTime); // e.g., "8:00 AM"
    setEndTime(endTime);     // e.g., "6:00 PM"
  
    if (!isCustomTime) {
    //   setStartTimeManual(startTime);
    //   setEndTimeManual(endTime);
    //   setStartTimeCustom('None');
    //   setEndTimeCustom('None');
      setStartTimeTemp(startTime);
      setEndTimeTemp(endTime);
    }
  
    setDropdownVisible(false);
    };
    
    const [startTimeCustom2, setStartTimeCustom2] = useState<Date>(new Date());
    const [endTimeCustom2, setEndTimeCustom2] = useState<Date>(new Date());
    const [pickerMode, setPickerMode] = useState<'start' | 'end' | null>(null);
    
    const showPicker = (mode: 'start' | 'end') => {
        if (!isCustomTimeTemp) return;  // Only allow picker if enabled
        setPickerMode(mode);
    };
    
    const onChange = (
        event: DateTimePickerEvent,
        selectedDate?: Date
    ) => {
        if (pickerMode === null) return;  // early exit
        setPickerMode(null);
    
        if (selectedDate) {
        if (pickerMode === 'start') {
            setStartTimeCustom2(selectedDate);
            console.log('Start Time selected:', selectedDate);
    
            if (isCustomTimeTemp) {
                const customStartTime = getTimeFromISOString(selectedDate.toISOString());
                // setStartTimeCustom(customStartTime);
                // setStartTimeManual('None');
                setStartTimeTemp(customStartTime);
            }
        } 
        else if (pickerMode === 'end') {
            setEndTimeCustom2(selectedDate);
            console.log('End Time selected:', selectedDate);
    
            if (isCustomTimeTemp) {
                const customEndTime = getTimeFromISOString(selectedDate.toISOString())
                // setEndTimeCustom(customEndTime);
                // setEndTimeManual('None');
                setEndTimeTemp(customEndTime);
            }
        }
        }
    };
  

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//   const formatTime = (date: Date) =>
//     date.toLocaleTimeString('en-PH', { 
//       timeZone: 'Asia/Manila', 
//       hour: '2-digit', 
//       minute: '2-digit', 
//       hour12: true 
//     });

  function getTimeFromISOString(isoString: string): string {
    const date = new Date(isoString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    // Format with leading zero if needed
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  return (

    <View>
        <View style={styles.bottomView}>

            <View style={styles.bottTopView}>
            <View style={styles.hourToggleView}>
                <Switch
                trackColor={{ false: '#ccc', true: '#007aff' }} // blue when active
                thumbColor={isCustomTimeTemp ? '#fff' : '#fff'} // white circle
                ios_backgroundColor="#ccc"
                onValueChange={toggleSwitch}
                value={isCustomTimeTemp}
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
                    backgroundColor: isCustomTimeTemp? "#F1F3F7": "white"
                    }
                ]}
                onPress={() => {
                    if (!isCustomTimeTemp) {
                    setDropdownVisible(true);
                    }
                }}
                activeOpacity={isCustomTimeTemp ? 1 : 0.7}
                >
                <Text 
                    style ={
                    [
                        styles.timePickerText,
                        {
                        color: isCustomTimeTemp? "#6D758F" : "black",
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
                    padding: 30,
                    alignItems: "center",
                    }}
                    activeOpacity={1}
                    onPressOut={() => setDropdownVisible(false)}
                    >
                    <View style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: 20,
                    width: "50%",
                    alignItems: "center",
                    }}>
                    {timeOptions.map((time) => (
                        <TouchableOpacity key={time} onPress={() => handleSelectTime(time)} >
                        <Text style={{ fontSize: 27, paddingVertical: 30 }}>{time}</Text>
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
                    backgroundColor: isCustomTimeTemp ? '#F1F3F7' : 'white',
                    }
                ]}
                activeOpacity={1}
                >
                <Text style={
                    [
                    styles.timePickerText,
                    { color: isCustomTimeTemp ? '#6D758F' : 'black' }
                    ]
                }>
                    {endTime || 'End Time'}
                </Text>
                </TouchableOpacity>

            </View>

                <View style={styles.TimePickerManualView}>
                    {/* Start time “input” */}
                    <TouchableOpacity
                        style={[
                        styles.timePickerStyle,
                        {
                            backgroundColor: isCustomTimeTemp ? 'white' : '#F1F3F7'
                        }
                        ]}
                        onPress={() => showPicker('start')}
                        activeOpacity={0.7}
                    >
                        <Text
                        style={{
                            color: isCustomTimeTemp ? 'black' : '#6D758F',
                            fontSize: 23,
                            fontWeight: isCustomTimeTemp ? 'bold' : 'normal'
                        }}
                        >
                        {formatTime(startTimeCustom2)}
                        </Text>
                    </TouchableOpacity>

                    <Image source={arrowLeft} style={styles.arrowLeft} />

                    {/* End time “input” */}
                    <TouchableOpacity
                        style={[
                        styles.timePickerStyle,
                        {
                            backgroundColor: isCustomTimeTemp ? 'white' : '#F1F3F7'
                        }
                        ]}
                        onPress={() => showPicker('end')}
                        activeOpacity={0.7}
                    >
                        <Text
                        style={{
                            color: isCustomTimeTemp ? 'black' : '#6D758F',
                            fontSize: 23,
                            fontWeight: isCustomTimeTemp ? 'bold' : 'normal'
                        }}
                        >
                        {formatTime(endTimeCustom2)}
                        </Text>
                    </TouchableOpacity>

                    {/* Render the native picker */}
                    {pickerMode && (
                        <DateTimePicker
                        value={pickerMode === 'start' ? startTimeCustom2 : endTimeCustom2}
                        mode="time"
                        display={'default'}
                        onChange={onChange}
                        />
                    )}
                </View>
            </View>
        </View>

    </View>
  );
};

export default TimePicker;
