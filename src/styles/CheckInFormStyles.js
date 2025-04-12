import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '95%',
    height: '95%',
  },
  scrollContent: {
    flexGrow: 1,
  },
  scrollRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  formContainerLeft: {
    width: '65%',
    paddingLeft: 25,
    paddingTop: 50,
  },
  formContainerRight: {
    width: '35%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
  },
});

export default styles;
