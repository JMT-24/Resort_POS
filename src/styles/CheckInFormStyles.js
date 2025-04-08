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
    paddingLeft: 25,
    paddingTop: 5,
  },
 
  checkInFormContainer: {
    //backgroundColor: 'violet',
    height: 400,
    paddingLeft: 30,
    paddingRight: 20,
    justifyContent: 'flex-end', 
    marginVertical: 20,
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
    paddingTop: "8%",
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
    fontSize: 25,
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
    width: 600,
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
    position: "absolute",
    bottom: 25,
    left: 685,
    right: 0,
    height: 550,
    width: "33%",
    borderWidth: 1, 
    borderColor: 'black',
    //backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 10,
  },
  paymentDetailsSummary: {
    height: 320,
    //backgroundColor: "gray",
  },
  detailSummaryField: {
    //backgroundColor: "red",
    height: 50,
    width: "100%",
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  detail_miniField: {
    //backgroundColor: "blue",
    display: "flex",
    flexDirection: "column",
    width: "80%",
    marginLeft: 15,
  },
  detail_subminiField: {
    //backgroundColor: "violet",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  summaryLabel: {
    fontWeight: "bold",
    fontSize: 15
  },







  paymentDetailsContainer: {
    //backgroundColor: "whitesmoke",
    height: 170,
    display: "flex",
    flexDirection: "column",
    marginTop: 25,
  },
  paymentDetailHeader: {
    fontSize: 16, 
    fontWeight: "bold",
    marginBottom: 5,
  },

  detailsField: {
    //backgroundColor: "yellow",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  horizontalLine: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  paymentDetailLabel: {
    fontSize: 14,
  },
  paymentDetailData: {
    fontSize: 14,
    fontWeight: "bold",
  },
  Confirmbtn: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    width: "100%",
    height: 40,
    alignSelf: "center",
    marginTop: 15,
    
  },
  ConfirmbtnText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },

});


export default styles