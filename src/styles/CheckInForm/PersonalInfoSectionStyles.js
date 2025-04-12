import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  checkInPageTop: {
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    right: 25,
  },
  exitButton: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkInFormContainer: {
    height: 400,
    paddingLeft: 30,
    paddingRight: 20,
    justifyContent: 'flex-end',
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
  checkInPersonalInfoForm: {
    height: '80%',
    width: 600,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '3%',
  },
  checkInPersonalInfoFormLeft: {
    width: '48%',
    flexDirection: 'column',
  },
  checkInPersonalInfoFormRight: {
    width: '48%',
    flexDirection: 'column',
  },
  formField: {
    marginBottom: 15,
  },
  formLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  chooseDatebtn: {
    backgroundColor: '#164CFF',
    height: '37%',
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  chooseDatebtnText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});

export default styles;
