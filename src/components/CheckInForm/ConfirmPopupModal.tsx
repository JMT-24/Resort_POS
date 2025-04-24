import React, {useEffect, useRef} from 'react';
import { Modal, View, Text, Image, ImageSourcePropType, Animated } from 'react-native';
import styles from '../../styles/CheckInForm/confirmModalStyles';

const confirmIcon: ImageSourcePropType = require('../../icons/confirmIcon.png');

interface ConfirmPopupModalProps {
  visible: boolean;
  onClose: () => void;
}

const ConfirmPopupModal: React.FC<ConfirmPopupModalProps> = ({ visible, onClose }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (visible) {
      fadeAnim.setValue(1);

      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }).start(() => {
          onClose();
        });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Image source={confirmIcon} style={styles.confirmIcon} />
          <Text style={styles.confirmText}>CONFIRMED</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmPopupModal;
