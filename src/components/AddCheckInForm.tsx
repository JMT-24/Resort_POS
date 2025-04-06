import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import styles from "../styles/CheckInFormStyles"


interface AddCheckinFormProps {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
}

const AddCheckinForm: React.FC<AddCheckinFormProps> = ({ modalVisible, setModalVisible }) => {
    const [activeTab, setActiveTab] = useState("General"); // Default tab

    const tabs = ["Guest Details", "No. Guest", "No. Items"]; // Tab options

    return (
        <View>
            <Modal 
                animationType="fade" 
                transparent 
                visible={modalVisible} 
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.overlay}>
                    <View style={styles.formContainer}>

                        <View style={styles.topPart}>
                            <View style={styles.navBar}>
                                {tabs.map((tab) => (
                                    <TouchableOpacity 
                                        key={tab} 
                                        style={styles.tabButton} 
                                        onPress={() => setActiveTab(tab)}
                                    >
                                        <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                                            {tab}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <View style={styles.underlineContainer}>
                                <View style={[styles.underline, { left: `${tabs.indexOf(activeTab) * 13}%` }]} />
                            </View>
                        </View> 

                        <View style={styles.middlePart}>
                            <View style={styles.middleLeft}>
                                <Text style={styles.middleLeftHeader}>Guest Details</Text>
                                <Text style={styles.middleLeftText}>Shimi shimiya</Text>
                            </View>
                            <View style={styles.middleRight}>
                                <View style={styles.formBox}>
                                    {/* First Name & Last Name */}
                                    <View style={styles.row}>
                                        <View style={styles.halfWidth}>
                                            <Text style={styles.label}>First Name</Text>
                                            <TextInput style={styles.input} placeholder="First Name" />
                                        </View>

                                    <View style={styles.halfWidth}>
                                        <Text style={styles.label}>Last Name</Text>
                                        <TextInput style={styles.input} placeholder="Last Name" />
                                    </View>

                                    </View>

                                    {/* Email */}
                                        <View>
                                            <Text style={styles.label}>Email</Text>
                                            <TextInput style={styles.input} placeholder="Email (Optional)" />
                                        </View>

                                    {/* Birth Year & Role */}
                                    <View style={styles.row}>
                                        <View style={styles.halfWidth}>
                                            <Text style={styles.label}>Contact</Text>
                                            <TextInput style={styles.input} placeholder="09159992232" />
                                        </View>
                                        <View style={styles.halfWidth}>
                                            <Text style={styles.label}>Swim Time</Text>
                                            <TextInput style={styles.input} placeholder="Day Swin" />
                                        </View>
                                    </View>

                                </View>
                            </View>

                           
                        </View>
                        
                        <View style={styles.bottomPart}>

                        </View>
                    </View>
                </View>

            </Modal>
        </View>
    );
};

export default AddCheckinForm