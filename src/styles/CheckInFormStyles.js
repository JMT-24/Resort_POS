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
    width: '48%', // Adjust width as needed
    flexDirection: 'column',
  },

  checkInPersonalInfoFormRight: {
    width: '48%', // Adjust width as needed
    flexDirection: 'column',
  },

  formField: {
    marginBottom: 15, // Space between fields
  },

  formLabel: {
    fontSize: 16, // Adjust the size as needed
    marginBottom: 5, // Space between label and input field
  },

  textInput: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
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
  },
  checkInNumOfGuestFormBottom: {
    height: "50%",
    //backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
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