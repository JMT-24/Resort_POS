import React from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, ImageSourcePropType, Image } from 'react-native';
import styles from '../../styles/TransactionDetails/TransacInfoStyles';

const haciendaIcon: ImageSourcePropType = require('../../icons/haciendaIcon.png');
const printIcon: ImageSourcePropType = require('../../icons/printIcon.png');

interface Props {
    referenceNum: string;
    guestName: string;
    timestamp: string;
}

const TransactInfo: React.FC<Props> = ({referenceNum, guestName, timestamp}) => {
    const formatDateFromString = (dateString: string) => {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
          return ''; // Invalid date
        }
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 0-based months
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
      };

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
                            <Text style={styles.infoValue}>{formatDateFromString(timestamp)}</Text>
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