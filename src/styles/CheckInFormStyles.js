import { StyleSheet } from "react-native";

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
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
  },
  checkInPageTop: {
    //backgroundColor: 'pink',
    height: 50,
    display: "flex",
    justifyContent: "center",
  },
  exitButton: {
    fontSize: 15,
    fontWeight: "bold",
  },
  formContainerLeft: {
    width: '65%',
    //backgroundColor: 'yellow',
    paddingLeft: 15,
  },
 
  checkInFormContainer: {
    //backgroundColor: 'violet',
    height: 450,
    paddingLeft: 30,
    paddingRight: 20,
    justifyContent: 'flex-end', 
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
    //backgroundColor: 'whitesmoke',
    height: "80%", 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingTop: "5%",
  },

  checkInPersonalInfoFormLeft: {
    width: '48%', 
    flexDirection: 'column',
  },

  checkInPersonalInfoFormRight: {
    width: '48%',
    flexDirection: 'column',
  },

  formToggleField: {
    marginBottom: 15, 
    //backgroundColor: "red",
    height: "45%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  formTogglePic: {
    backgroundColor: "gray",
    height: 40,
    width: 40,
  },

  formToggleLabel: {
    fontSize: 30,
    fontWeight: "bold", 
    marginBottom: 5,
    //backgroundColor: "teal",
  },

  formField: {
    marginBottom: 15, 
    //backgroundColor: "violet",
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
    backgroundColor: '#007AFF',
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




  checkInNumOfGuestForm: {
    //backgroundColor: 'whitesmoke',
    height: "80%", 
    flexDirection: 'column', 
    justifyContent: 'space-between',
    paddingTop: "5%",
  },

  checkInNumOfGuestFormTop: {
    height: "50%",
    //backgroundColor: "gray",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  checkInNumOfGuestFormBottom: {
    height: "50%",
    //backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
  },


  checkInOtherChargesForm: {
    //backgroundColor: 'gray',
    height: "80%", 
    width: 800,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingTop: "5%",
  },
  checkInOtherChargesFormLeft: {
    //backgroundColor: "blue",
    width: '48%',
    flexDirection: 'column',
    height: 150,
  },
  checkInOtherChargesFormRight: {
    //backgroundColor: "violet",
    width: '48%',
    flexDirection: 'column',
    height: 150,
  },



  
  formContainerRight: {
    width: '35%',
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: 20,
    paddingTop: 30,
    //backgroundColor: 'blue',
  },
  summaryBox: {
    height: 700,
    width: "100%",
    borderWidth: 1, 
    borderColor: 'black',
  },
});


export default styles