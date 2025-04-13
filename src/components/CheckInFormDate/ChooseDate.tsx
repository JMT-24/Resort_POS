import React from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import styles from '../../styles/CheckInFormDate/ChooseDateStyles';

interface Props {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const ChooseDate: React.FC<Props> = ({ modalVisible, setModalVisible }) => {
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

                    </View>

                    <View style={styles.bottomView}>

                    </View>

                    <View style={styles.buttonView}>

                    </View>
                </View>
            </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ChooseDate;
