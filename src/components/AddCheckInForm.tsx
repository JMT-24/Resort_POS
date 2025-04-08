import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { View, Text, Modal, LogBox, TouchableOpacity, TextInput } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import styles from "../styles/CheckInFormStyles";
import { initDatabase, fetchFirstName } from '../sqliteService';
import { ScrollView } from 'react-native-gesture-handler';

type Setter = Dispatch<SetStateAction<number>>;

// Suppress Firebase deprecation warnings (safe for now)
LogBox.ignoreLogs([
  'This method is deprecated', 
  'RNFirebase',
]);

interface AddCheckinFormProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const AddCheckinForm: React.FC<AddCheckinFormProps> = ({ modalVisible, setModalVisible }) => {
  const [firestoreName, setFirestoreName] = useState('');
  const [sqliteName, setSqliteName] = useState('');

    // Guests
    const [adultCount, setAdultCount] = useState<number>(0);
    const [seniorCount, setSeniorCount] = useState<number>(0);
    const [kidsCount, setKidsCount] = useState<number>(0);
    const [pwdCount, setPwdCount] = useState<number>(0);

    // Facilities / Charges
    const [cottagesCount, setCottagesCount] = useState<number>(0);
    const [electricChargeCount, setElectricChargeCount] = useState<number>(0);
    const [roundTableCount, setRoundTableCount] = useState<number>(0);
    const [monoBlockCount, setMonoBlockCount] = useState<number>(0);
    const [chairsCount, setChairsCount] = useState<number>(0);
    const [corkCageCount, setCorkCageCount] = useState<number>(0);



  const increment = (setter: Setter) => {
    setter(prev => prev + 1);
  };

  const decrement = (setter: Setter) => {
    setter(prev => (prev > 0 ? prev - 1 : 0));
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        await initDatabase();
        const fetchedSqliteName = await fetchFirstName();
        setSqliteName(fetchedSqliteName);

        const snapshot = await firestore().collection('testCollection').get();
        const firstDoc = snapshot.docs[0];
        if (firstDoc?.exists) {
          const data = firstDoc.data();
          setFirestoreName(data.name || '');
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
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
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.scrollRow}>
                        <View style={styles.formContainerLeft}>
                            <View style={styles.checkInPageTop}>
                                <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={styles.exitButton}>{`<`} Exit</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.checkInFormContainer}>
                                <Text style={styles.formHeader}>Personal Information</Text>
                                <Text style={styles.formInstruction}>Please double check information</Text>
                                <View style={styles.checkInPersonalInfoForm}>
                                    <View style={styles.checkInPersonalInfoFormLeft}>
                                        <View style={styles.formField}>
                                            <Text style={styles.formLabel}>First Name</Text>
                                            <TextInput style={styles.textInput} placeholder="Enter First Name (Optional)" />
                                        </View>
                                        <View style={styles.formField}>
                                            <Text style={styles.formLabel}>Contact No.</Text>
                                            <TextInput style={styles.textInput} placeholder="Enter Contact No. (Optional)" keyboardType="phone-pad" />
                                        </View>
                                            <View style={styles.formField}>
                                            <Text style={styles.formLabel}>Date</Text>
                                            <TextInput style={styles.textInput} placeholder="Enter Date" keyboardType="default" />
                                        </View>
                                    </View>

                                    <View style={styles.checkInPersonalInfoFormRight}>
                                        <View style={styles.formField}>
                                            <Text style={styles.formLabel}>Last Name</Text>
                                            <TextInput style={styles.textInput} placeholder="Enter Last Name (Optional)" />
                                        </View>
                                        <View style={styles.formField}>
                                            <Text style={styles.formLabel}>Address</Text>
                                            <TextInput style={styles.textInput} placeholder="Enter Address (Optional)" multiline />
                                        </View>
                                    </View>
                                </View>

                            </View>

                            <View style={styles.checkInFormContainer}>
                                <Text style={styles.formHeader}>Number of Guests</Text>
                                <Text style={styles.formInstruction}>Please double check information</Text>
                                <View style={styles.checkInNumOfGuestForm}>
                                    <View style={styles.checkInNumOfGuestFormTop}>
                                        <View style={styles.checkInPersonalInfoFormLeft}>
                                            <View style={styles.formToggleField}>
                                                <View style={styles.formTogglePic}></View>
                                                <Text style={styles.formToggleLabel}>Adults</Text>
                                                <View style={styles.toggleContainer}>
                                                    <TouchableOpacity style={styles.toggleCircleWhite} onPress={() => decrement(setAdultCount)}>
                                                        <Text style={styles.toggleSymbol}>−</Text>
                                                    </TouchableOpacity>

                                                    <Text style={styles.toggleValue}>{adultCount}</Text>

                                                    <TouchableOpacity style={styles.toggleCircleBlue} onPress={() => increment(setAdultCount)}>
                                                        <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={styles.formToggleField}>
                                                <View style={styles.formTogglePic}></View>
                                                <Text style={styles.formToggleLabel}>Senior</Text>
                                                <View style={styles.toggleContainer}>
                                                    <TouchableOpacity style={styles.toggleCircleWhite} onPress={() => decrement(setSeniorCount)}>
                                                        <Text style={styles.toggleSymbol}>−</Text>
                                                    </TouchableOpacity>

                                                    <Text style={styles.toggleValue}>{seniorCount}</Text>

                                                    <TouchableOpacity style={styles.toggleCircleBlue} onPress={() => increment(setSeniorCount)}>
                                                        <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={styles.checkInPersonalInfoFormRight}>
                                            <View style={styles.formToggleField}>
                                                <View style={styles.formTogglePic}></View>
                                                <Text style={styles.formToggleLabel}>Kids</Text>
                                                <View style={styles.toggleContainer}>
                                                    <TouchableOpacity style={styles.toggleCircleWhite} onPress={() => decrement(setKidsCount)}>
                                                        <Text style={styles.toggleSymbol}>−</Text>
                                                    </TouchableOpacity>

                                                    <Text style={styles.toggleValue}>{kidsCount}</Text>

                                                    <TouchableOpacity style={styles.toggleCircleBlue} onPress={() => increment(setKidsCount)}>
                                                        <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={styles.formToggleField}>
                                                <View style={styles.formTogglePic}></View>
                                                <Text style={styles.formToggleLabel}>PWD</Text>
                                                <View style={styles.toggleContainer}>
                                                    <TouchableOpacity style={styles.toggleCircleWhite} onPress={() => decrement(setPwdCount)}>
                                                        <Text style={styles.toggleSymbol}>−</Text>
                                                    </TouchableOpacity>

                                                    <Text style={styles.toggleValue}>{pwdCount}</Text>

                                                    <TouchableOpacity style={styles.toggleCircleBlue} onPress={() => increment(setPwdCount)}>
                                                        <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.checkInNumOfGuestFormBottom}>
                                        <View style={styles.checkInPersonalInfoFormLeft}>
                                            <View style={styles.formField}>
                                                <Text style={styles.formLabel}>ID Number 1</Text>
                                                <TextInput style={styles.textInput} placeholder="X72D779GG997DYUG" />
                                            </View>
                                            <View style={styles.formField}>
                                                <Text style={styles.formLabel}>ID Number 2</Text>
                                                <TextInput style={styles.textInput} placeholder="X72D779GG997DYUG" />
                                            </View>
                                        </View>

                                        <View style={styles.checkInPersonalInfoFormRight}>
                                            <View style={styles.formField}>
                                                <Text style={styles.formLabel}>ID Number 1</Text>
                                                <TextInput style={styles.textInput} placeholder="X72D779GG997DYUG" />
                                            </View>
                                            <View style={styles.formField}>
                                                <Text style={styles.formLabel}>ID Number 2</Text>
                                                <TextInput style={styles.textInput} placeholder="X72D779GG997DYUG" />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.checkInFormContainer}>
                                <Text style={styles.formHeader}>Other Charges</Text>
                                <Text style={styles.formInstruction}>Please double check information</Text>
                                <View style={styles.checkInOtherChargesForm}>
                                    <View style={styles.checkInOtherChargesFormLeft}>
                                        <View style={styles.formToggleField}>
                                            <Text style={styles.formToggleLabel}>Cottages</Text>
                                            <View style={styles.toggleContainer}>
                                                <TouchableOpacity style={styles.toggleCircleWhite} onPress={() => decrement(setCottagesCount)}>
                                                    <Text style={styles.toggleSymbol}>−</Text>
                                                </TouchableOpacity>

                                                <Text style={styles.toggleValue}>{cottagesCount}</Text>

                                                <TouchableOpacity style={styles.toggleCircleBlue} onPress={() => increment(setCottagesCount)}>
                                                    <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.formToggleField}>
                                            <Text style={styles.formToggleLabel}>E-Charge</Text>
                                            <View style={styles.toggleContainer}>
                                                <TouchableOpacity style={styles.toggleCircleWhite} onPress={() => decrement(setElectricChargeCount)}>
                                                    <Text style={styles.toggleSymbol}>−</Text>
                                                </TouchableOpacity>

                                                <Text style={styles.toggleValue}>{electricChargeCount}</Text>

                                                <TouchableOpacity style={styles.toggleCircleBlue} onPress={() => increment(setElectricChargeCount)}>
                                                    <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.formToggleField}>
                                            <Text style={styles.formToggleLabel}>Round Table</Text>
                                            <View style={styles.toggleContainer}>
                                                <TouchableOpacity style={styles.toggleCircleWhite} onPress={() => decrement(setRoundTableCount)}>
                                                    <Text style={styles.toggleSymbol}>−</Text>
                                                </TouchableOpacity>

                                                <Text style={styles.toggleValue}>{roundTableCount}</Text>

                                                <TouchableOpacity style={styles.toggleCircleBlue} onPress={() => increment(setRoundTableCount)}>
                                                    <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.checkInOtherChargesFormRight}>
                                        <View style={styles.formToggleField}>
                                            <Text style={styles.formToggleLabel}>Mono Block</Text>
                                            <View style={styles.toggleContainer}>
                                                <TouchableOpacity style={styles.toggleCircleWhite} onPress={() => decrement(setMonoBlockCount)}>
                                                    <Text style={styles.toggleSymbol}>−</Text>
                                                </TouchableOpacity>

                                                <Text style={styles.toggleValue}>{monoBlockCount}</Text>

                                                <TouchableOpacity style={styles.toggleCircleBlue} onPress={() => increment(setMonoBlockCount)}>
                                                    <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.formToggleField}>
                                            <Text style={styles.formToggleLabel}>Chairs</Text>
                                            <View style={styles.toggleContainer}>
                                                <TouchableOpacity style={styles.toggleCircleWhite} onPress={() => decrement(setChairsCount)}>
                                                    <Text style={styles.toggleSymbol}>−</Text>
                                                </TouchableOpacity>

                                                <Text style={styles.toggleValue}>{chairsCount}</Text>

                                                <TouchableOpacity style={styles.toggleCircleBlue} onPress={() => increment(setChairsCount)}>
                                                    <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.formToggleField}>
                                            <Text style={styles.formToggleLabel}>Cork Cage</Text>
                                            <View style={styles.toggleContainer}>
                                                <TouchableOpacity style={styles.toggleCircleWhite} onPress={() => decrement(setCorkCageCount)}>
                                                    <Text style={styles.toggleSymbol}>−</Text>
                                                </TouchableOpacity>

                                                <Text style={styles.toggleValue}>{corkCageCount}</Text>

                                                <TouchableOpacity style={styles.toggleCircleBlue} onPress={() => increment(setCorkCageCount)}>
                                                    <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    
                                </View>
                            </View>
                        </View>

                        <View style={styles.formContainerRight}>
                            
                        </View>

                    </View>
                    </ScrollView>
                    <View style={styles.summaryBox}>
                        <ScrollView style={{ height: '100%' }} contentContainerStyle={{ paddingBottom: 300 }}>
                            <View style={styles.paymentDetailsSummary}>

                                <View style={styles.detailSummaryField}>
                                    <View style={styles.formTogglePic}></View>
                                    <View style={styles.detail_miniField}>
                                        <Text style={styles.summaryLabel}>Adults</Text>
                                        <View style={styles.detail_subminiField}>
                                            <Text>2x</Text>
                                            <Text style={styles.summaryLabel}>1,500</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.detailSummaryField}>
                                    <View style={styles.formTogglePic}></View>
                                    <View style={styles.detail_miniField}>
                                        <Text style={styles.summaryLabel}>Senior</Text>
                                        <View style={styles.detail_subminiField}>
                                            <Text>2x</Text>
                                            <Text style={styles.summaryLabel}>1,500</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.detailSummaryField}>
                                    <View style={styles.formTogglePic}></View>
                                    <View style={styles.detail_miniField}>
                                        <Text style={styles.summaryLabel}>Kids</Text>
                                        <View style={styles.detail_subminiField}>
                                            <Text>2x</Text>
                                            <Text style={styles.summaryLabel}>1,500</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.detailSummaryField}>
                                    <View style={styles.formTogglePic}></View>
                                    <View style={styles.detail_miniField}>
                                        <Text style={styles.summaryLabel}>PWD</Text>
                                        <View style={styles.detail_subminiField}>
                                            <Text>2x</Text>
                                            <Text style={styles.summaryLabel}>1,500</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.detailSummaryField}>
                                    <View style={styles.formTogglePic}></View>
                                    <View style={styles.detail_miniField}>
                                        <Text style={styles.summaryLabel}>Cottages</Text>
                                        <View style={styles.detail_subminiField}>
                                            <Text>2x</Text>
                                            <Text style={styles.summaryLabel}>1,500</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.detailSummaryField}>
                                    <View style={styles.formTogglePic}></View>
                                    <View style={styles.detail_miniField}>
                                        <Text style={styles.summaryLabel}>E-Charge</Text>
                                        <View style={styles.detail_subminiField}>
                                            <Text>2x</Text>
                                            <Text style={styles.summaryLabel}>1,500</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.detailSummaryField}>
                                    <View style={styles.formTogglePic}></View>
                                    <View style={styles.detail_miniField}>
                                        <Text style={styles.summaryLabel}>Round Table</Text>
                                        <View style={styles.detail_subminiField}>
                                            <Text>2x</Text>
                                            <Text style={styles.summaryLabel}>1,500</Text>
                                        </View>
                                    </View>
                                </View>
                                
                                <View style={styles.detailSummaryField}>
                                    <View style={styles.formTogglePic}></View>
                                    <View style={styles.detail_miniField}>
                                        <Text style={styles.summaryLabel}>Mono Block</Text>
                                        <View style={styles.detail_subminiField}>
                                            <Text>2x</Text>
                                            <Text style={styles.summaryLabel}>1,500</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.detailSummaryField}>
                                    <View style={styles.formTogglePic}></View>
                                    <View style={styles.detail_miniField}>
                                        <Text style={styles.summaryLabel}>Chair</Text>
                                        <View style={styles.detail_subminiField}>
                                            <Text>2x</Text>
                                            <Text style={styles.summaryLabel}>1,500</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.detailSummaryField}>
                                    <View style={styles.formTogglePic}></View>
                                    <View style={styles.detail_miniField}>
                                        <Text style={styles.summaryLabel}>Cork Cage</Text>
                                        <View style={styles.detail_subminiField}>
                                            <Text>2x</Text>
                                            <Text style={styles.summaryLabel}>1,500</Text>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </ScrollView>

                            <View style={styles.paymentDetailsContainer}>
                                <Text style={styles.paymentDetailHeader}>Payment Details</Text>
                                <View style={styles.detailsField}>
                                    <Text style={styles.paymentDetailLabel}>Subtotal</Text>
                                    <Text style={styles.paymentDetailData}>98.00</Text>
                                </View>
                                <View style={styles.detailsField}>
                                    <Text style={styles.paymentDetailLabel}>Discount</Text>
                                    <Text style={styles.paymentDetailData}>0.00</Text>
                                </View>
                                <View style={styles.horizontalLine} />
                                <View style={styles.detailsField}>
                                    <Text style={styles.paymentDetailData}>Total</Text>
                                    <Text style={styles.paymentDetailData}>98.00</Text>
                                </View>
                                <TouchableOpacity style={styles.Confirmbtn}>
                                    <Text style={styles.ConfirmbtnText}>CONFIRM</Text>
                                </TouchableOpacity>
                            </View>
                
                    </View>
                </View>
            </View>
        </Modal>
    </View>

  );
};

export default AddCheckinForm;
