import React from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, ImageSourcePropType, Image } from 'react-native';
import styles from '../../styles/TransactionDetails/InfoTableStyles';

interface Props {
    adults: number;
}

const InfoTable: React.FC<Props> = ({adults}) => {
    return (
        <View style={styles.TableContainer}>
            <View style={styles.table}>
                <View style={[styles.row, styles.headerRow]}>
                    <Text style={[styles.cell2, styles.headerText]}>Guest</Text>
                    <Text style={[styles.cell, styles.headerText]}>Qty</Text>
                    <Text style={[styles.cell, styles.headerText]}>Rate</Text>
                    <Text style={[styles.cell, styles.headerText]}>Amount</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.cell2}>Adult</Text>
                    <Text style={styles.cell}>2</Text>
                    <Text style={styles.cell}>180</Text>
                    <Text style={styles.cell}>360</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.cell2}>Kids</Text>
                    <Text style={styles.cell}>2</Text>
                    <Text style={styles.cell}>150</Text>
                    <Text style={styles.cell}>300</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.cell2}>Senior</Text>
                    <Text style={styles.cell}>2</Text>
                    <Text style={styles.cell}>150</Text>
                    <Text style={styles.cell}>300</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.cell2}>PWD</Text>
                    <Text style={styles.cell}>2</Text>
                    <Text style={styles.cell}>150</Text>
                    <Text style={styles.cell}>300</Text>
                </View>

            </View>

            <View style={styles.table}>
                <View style={[styles.row, styles.headerRow]}>
                    <Text style={[styles.cell2, styles.headerText]}>Other Charges</Text>
                    <Text style={[styles.cell, styles.headerText]}>Qty</Text>
                    <Text style={[styles.cell, styles.headerText]}>Rate</Text>
                    <Text style={[styles.cell, styles.headerText]}>Amount</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.cell2}>Cottage</Text>
                    <Text style={styles.cell}>2</Text>
                    <Text style={styles.cell}>200</Text>
                    <Text style={styles.cell}>400</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.cell2}>Cork Cage</Text>
                    <Text style={styles.cell}>2</Text>
                    <Text style={styles.cell}>200</Text>
                    <Text style={styles.cell}>400</Text>
                </View> 

                <View style={styles.row}>
                    <Text style={styles.cell2}>Electricity Charge</Text>
                    <Text style={styles.cell}>2</Text>
                    <Text style={styles.cell}>200</Text>
                    <Text style={styles.cell}>400</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.cell2}>Long Table</Text>
                    <Text style={styles.cell}>2</Text>
                    <Text style={styles.cell}>200</Text>
                    <Text style={styles.cell}>400</Text>
                </View>
                
                <View style={styles.row}>
                    <Text style={styles.cell2}>Round Table</Text>
                    <Text style={styles.cell}>2</Text>
                    <Text style={styles.cell}>200</Text>
                    <Text style={styles.cell}>400</Text>
                </View>
                
                <View style={styles.row}>
                    <Text style={styles.cell2}>Chairs</Text>
                    <Text style={styles.cell}>2</Text>
                    <Text style={styles.cell}>200</Text>
                    <Text style={styles.cell}>400</Text>
                </View>

            </View>

            <View style={styles.footerContainer}>
                <View style={styles.half}>
                    <Text style={styles.footerHeader}>Notes:</Text>
                    <View style={styles.footerNotesContainer}>
                        <Text style={styles.NotesText}>No Refund / Cancellation</Text>
                        <Text style={styles.NotesText}>Do not leave your valuables</Text>
                    </View>
                </View>
                <View style={styles.half}>
                    <View style={styles.footerView}>
                        <Text style={styles.footerText}>Downpayment{'('}50{'%)'}</Text>
                        <Text style={styles.footerText}>5,000</Text>
                    </View>
                    <View style={styles.footerView}>
                        <Text style={[styles.footerText, {fontWeight: "bold"}]}>Total Price{':'}</Text>
                        <Text style={[styles.footerText, {fontWeight: "bold"}]}>10,000</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default InfoTable;