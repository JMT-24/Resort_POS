// CheckInForm/GuestCountSection.tsx
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from '../../styles/CheckInFormStyles';
import avatarIcon from '../../icons/avatarIcon.png';

interface GuestCounts {
  adult: number;
  senior: number;
  kids: number;
  pwd: number;
}

interface GuestCountSectionProps {
  guestCounts: GuestCounts;
  setGuestCounts: React.Dispatch<React.SetStateAction<GuestCounts>>;
}

const GuestCountSection: React.FC<GuestCountSectionProps> = ({ guestCounts, setGuestCounts }) => {
  const update = (type: keyof GuestCounts, delta: number) => {
    setGuestCounts(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

  const guestField = (label: string, key: keyof GuestCounts) => (
    <View style={styles.formToggleField}>
      <Image source={avatarIcon} style={styles.formTogglePic} />
      <Text style={styles.formToggleLabel}>{label}</Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.toggleCircleWhite} onPress={() => update(key, -1)}>
          <Text style={styles.toggleSymbol}>−</Text>
        </TouchableOpacity>
        <Text style={styles.toggleValue}>{guestCounts[key]}</Text>
        <TouchableOpacity style={styles.toggleCircleBlue} onPress={() => update(key, 1)}>
          <Text style={styles.toggleSymbolPlus}>＋</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderIDFields = (label: string, count: number, prefix: string) =>
    count > 0 && (
      <View style={styles.formField}>
        <Text style={styles.formLabel}>{label}</Text>
        {Array.from({ length: count }).map((_, i) => (
          <TextInput key={`${prefix}-${i}`} style={styles.textInput} placeholder={`${label} #${i + 1}`} />
        ))}
      </View>
    );

  return (
    <View style={styles.checkInFormContainer}>
      <Text style={styles.formHeader}>Number of Guests</Text>
      <Text style={styles.formInstruction}>Please double check information</Text>
      <View style={styles.checkInNumOfGuestForm}>
        <View style={styles.checkInNumOfGuestFormTop}>
          <View style={styles.checkInPersonalInfoFormLeft}>
            {guestField('Adults', 'adult')}
            {guestField('Senior', 'senior')}
          </View>
          <View style={styles.checkInPersonalInfoFormRight}>
            {guestField('Kids', 'kids')}
            {guestField('PWD', 'pwd')}
          </View>
        </View>
        <View style={styles.checkInNumOfGuestFormBottom}>
          <View style={styles.checkInPersonalInfoFormLeft}>
            {renderIDFields('Senior ID Numbers', guestCounts.senior, 'senior')}
          </View>
          <View style={styles.checkInPersonalInfoFormRight}>
            {renderIDFields('PWD ID Numbers', guestCounts.pwd, 'pwd')}
          </View>
        </View>
      </View>
    </View>
  );
};

export default GuestCountSection;
