import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, ImageSourcePropType, Image } from 'react-native';
import styles from '../../styles/TransactionDetails/InfoTableStyles';
import { getPriceList, PriceList } from '../../database/priceListSQLite';

interface Props {
    adults: number;
    kids: number;
    senior: number;
    pwd: number;
    cottages: number;
    corkCage: number;
    electricCharge: number;
    longTable: number;
    roundTable: number;
    chairs: number;
}


const InfoTable: React.FC<Props> = ({adults, kids, senior, pwd,
    cottages, corkCage, electricCharge, longTable, roundTable, chairs
}) => {

const [priceList, setPriceList] = useState<PriceList | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      const prices = await getPriceList();
      setPriceList(prices);
    };
  
    fetchPrices();
  }, []);

  const getPriceForLabel = (label: string): number => {
    if (!priceList) return 0;
  
    switch (label) {
      case 'Adults': return priceList.adults;
      case 'Senior': return priceList.senior;
      case 'Kids': return priceList.kids;
      case 'PWD': return priceList.pwd;
      case 'Cottages': return priceList.cottage;
      case 'Electric Charge': return priceList.electric;
      case 'Round Table': return priceList.roundTable;
      case 'Long Table': return priceList.longTable;
      case 'Chair': return priceList.chairs;
      case 'Cork Cage': return priceList.corkCage;
      default: return 0;
    }
  };

    const InfoRow: React.FC<{label: string, amount: number}> = ({label, amount}) => (
        <View style={styles.row}>
            <Text style={styles.cell2}>{label}</Text>
            <Text style={styles.cell}>{amount}</Text>
            <Text style={styles.cell}>{getPriceForLabel(`${label}`)}</Text>
            <Text style={styles.cell}>{`${getPriceForLabel(label) * amount}`}</Text>
        </View>
    );

    const totalPrice =
    getPriceForLabel('Adults') * adults +
    getPriceForLabel('Kids') * kids +
    getPriceForLabel('Senior') * senior +
    getPriceForLabel('PWD') * pwd +
    getPriceForLabel('Cottages') * cottages +
    getPriceForLabel('Electric Charge') * electricCharge +
    getPriceForLabel('Round Table') * roundTable +
    getPriceForLabel('Long Table') * longTable +
    getPriceForLabel('Chair') * chairs +
    getPriceForLabel('Cork Cage') * corkCage;

    const halfPrice = totalPrice * 0.5;

    return (
        <View style={styles.TableContainer}>
            <View style={styles.table}>
                <View style={[styles.row, styles.headerRow]}>
                    <Text style={[styles.cell2, styles.headerText]}>Guest</Text>
                    <Text style={[styles.cell, styles.headerText]}>Qty</Text>
                    <Text style={[styles.cell, styles.headerText]}>Rate</Text>
                    <Text style={[styles.cell, styles.headerText]}>Amount</Text>
                </View>
                
                <InfoRow label='Adults' amount={adults} />
                <InfoRow label='Kids' amount={kids} />
                <InfoRow label='Senior' amount={senior} />
                <InfoRow label='PWD' amount={pwd} />

            </View>

            <View style={styles.table}>
                <View style={[styles.row, styles.headerRow]}>
                    <Text style={[styles.cell2, styles.headerText]}>Other Charges</Text>
                    <Text style={[styles.cell, styles.headerText]}>Qty</Text>
                    <Text style={[styles.cell, styles.headerText]}>Rate</Text>
                    <Text style={[styles.cell, styles.headerText]}>Amount</Text>
                </View>

                <InfoRow label='Cottages' amount={cottages} />
                <InfoRow label='Electric Charge' amount={electricCharge} />
                <InfoRow label='Round Table' amount={roundTable} />
                <InfoRow label='Long Table' amount={longTable} />
                <InfoRow label='Chair' amount={chairs} />
                <InfoRow label='Cork Cage' amount={corkCage} />
                

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
                        <Text style={styles.footerText}>
                            ₱{halfPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </Text>
                    </View>
                    <View style={styles.footerView}>
                        <Text style={[styles.footerText, {fontWeight: "bold"}]}>Total Price{':'}</Text>
                        <Text style={[styles.footerText, {fontWeight: "bold"}]}>
                            ₱{totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default InfoTable;