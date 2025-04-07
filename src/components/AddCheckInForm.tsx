import React, { useEffect, useState } from 'react';
import { View, Text, Modal } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import styles from "../styles/CheckInFormStyles";
import { initDatabase, fetchFirstName } from '../sqliteService';

interface AddCheckinFormProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const AddCheckinForm: React.FC<AddCheckinFormProps> = ({ modalVisible, setModalVisible }) => {
  const [firestoreName, setFirestoreName] = useState('');
  const [sqliteName, setSqliteName] = useState('');

  useEffect(() => {
    const loadData = async () => {
        await initDatabase();
        const fetchedSqliteName = await fetchFirstName();
        setSqliteName(fetchedSqliteName);

        firestore()
        .collection('testCollection')
        .get()
        .then(snapshot => {
          const data = snapshot.docs[0].data();
          setFirestoreName(data.name);
        });
    };

    if (modalVisible) {
        loadData();
    }
   
  }, [modalVisible]);

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
            <Text>Hello</Text>
            <Text>Fetched name: {firestoreName}</Text>
            <Text>Local Fetched name: {sqliteName}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddCheckinForm;
