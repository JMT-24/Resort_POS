// CheckInForm/OtherChargesSection.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/CheckInForm/OtherChargesSectionStyles';

interface Charges {
  cottages: number;
  electric: number;
  roundTable: number;
  longTable: number;
  chairs: number;
  corkCage: number;
}

interface OtherChargesSectionProps {
  charges: Charges;
  setCharges: React.Dispatch<React.SetStateAction<Charges>>;
}

const OtherChargesSection: React.FC<OtherChargesSectionProps> = ({ charges, setCharges }) => {
  const update = (key: keyof Charges, delta: number) =>
    setCharges(prev => ({ ...prev, [key]: Math.max(0, prev[key] + delta) }));

  const chargeField = (label: string, key: keyof Charges) => (
    <View style={styles.formToggleField}>
      <Text style={styles.formToggleLabel}>{label}</Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.toggleCircleWhite} onPress={() => update(key, -1)}>
          <Text style={styles.toggleSymbol}>−</Text>
        </TouchableOpacity>
        <Text style={styles.toggleValue}>{charges[key]}</Text>
        <TouchableOpacity style={styles.toggleCircleBlue} onPress={() => update(key, 1)}>
          <Text style={styles.toggleSymbolPlus}>＋</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.checkInFormContainer}>
      <Text style={styles.formHeader}>Other Charges</Text>
      <Text style={styles.formInstruction}>Please double check information</Text>
      <View style={styles.checkInOtherChargesForm}>
        <View style={styles.checkInOtherChargesFormLeft}>
          {chargeField('Round Table', 'roundTable')}
          {chargeField('Long Table', 'longTable')}
        </View>
        <View style={styles.checkInOtherChargesFormRight}>
          {chargeField('Chairs', 'chairs')}
          {chargeField('Cork Cage', 'corkCage')}
        </View>
      </View>
    </View>
  );
};

export default OtherChargesSection;
