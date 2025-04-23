import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import styles from '../../styles/CheckInForm/confirmModalStyles';

interface ConfirmPopupModalProps {
  visible: boolean;
  onClose: () => void;
}

const ConfirmPopupModal: React.FC<ConfirmPopupModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text>Are you sure?</Text>
          {/* Add buttons and other content here */}
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmPopupModal;
