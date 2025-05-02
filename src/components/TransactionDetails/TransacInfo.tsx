import React from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, ImageSourcePropType, Image } from 'react-native';
import styles from '../../styles/TransactionDetails/TransacInfoStyles';

const haciendaIcon: ImageSourcePropType = require('../../icons/haciendaIcon.png');
const printIcon: ImageSourcePropType = require('../../icons/printIcon.png');

interface Props {
    referenceNum: string;
    guestName: string;
}

const TransactInfo: React.FC<Props> = ({referenceNum, guestName}) => {
    return (
        <View style={styles.container}>
            {/* Top Half */}
            <View style={styles.half}>
                <View style={styles.quarter}>
                    <Image source={haciendaIcon} style={styles.haciendaIcon} />
                </View>
                <View style={styles.quarter2}>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoLabel}>Transaction Number:</Text>
                            <Text style={styles.infoValue}>{referenceNum}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoLabel}>Date Created:</Text>
                            <Text style={styles.infoValue}>MM/DD/YYYY</Text>
                        </View>
                </View>
            </View>

            {/* Bottom Half */}
            <View style={styles.half}>
                <View style={styles.quarter3}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoLabel}>From:</Text>
                        <Text style={styles.infoValue}>{`${guestName}`}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoLabel}>Billed to:</Text>
                        <Text style={styles.infoValue}>Sample Inc. </Text>
                    </View>
                </View>
                <View style={styles.quarter4}>
                    <TouchableOpacity style={styles.printBtn}>
                        <Image source={printIcon} style={styles.printIcon}/>
                        <Text style={styles.printBtnText}>Print</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default TransactInfo;