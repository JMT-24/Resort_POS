import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  checkInFormContainer: {
    height: 400,
    paddingLeft: 30,
    paddingRight: 20,
    marginVertical: 20,
    width: 650,
  },
  formHeader: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  formInstruction: {
    fontSize: 15,
    marginBottom: 10,
  },
  checkInOtherChargesForm: {
    height: '80%',
    width: 600,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '5%',
  },
  checkInOtherChargesFormLeft: {
    width: '48%',
    flexDirection: 'column',
    height: 150,
  },
  checkInOtherChargesFormRight: {
    width: '48%',
    flexDirection: 'column',
    height: 150,
  },
  formToggleField: {
    marginBottom: 15,
    height: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formToggleLabel: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 25,
    padding: 5,
    paddingHorizontal: 10,
  },
  toggleCircleWhite: {
    backgroundColor: '#fff',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  toggleCircleBlue: {
    backgroundColor: '#164CFF',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  toggleSymbol: {
    fontSize: 20,
    color: '#999',
    fontWeight: 'bold',
  },
  toggleSymbolPlus: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  toggleValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});

export default styles;
