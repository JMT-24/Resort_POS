import React from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, ImageSourcePropType, Image } from 'react-native';
import styles from '../../styles/TransactionDetails/TransacInfoStyles';

const haciendaIcon: ImageSourcePropType = require('../../icons/haciendaIcon.png');

interface Props {
    transactNum: number;
}

const TransactInfo: React.FC<Props> = ({transactNum}) => {
    return (
        <View style={styles.container}>
            {/* Top Half */}
            <View style={styles.half}>
                <View style={styles.quarter}>
                    <Image source={haciendaIcon} style={styles.haciendaIcon} />
                </View>
                <View style={styles.quarter}>
                    
                </View>
            </View>

            {/* Bottom Half */}
            <View style={styles.half}>
                <View style={styles.quarter}>
                    
                </View>
                <View style={styles.quarter}>
                    
                </View>
            </View>
        </View>
    );
};

export default TransactInfo;