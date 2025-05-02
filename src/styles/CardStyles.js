import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  topHeaderCont: {
    //backgroundColor: '#EEF2FF',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  guestTypeCont: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 10,
    paddingVertical: 4
  },
  timeCounterLabelCont: {
    flexDirection: "row",
    //backgroundColor: "red",
    width: 95,
    justifyContent: "space-evenly",
  },
  timeCounterLabel: {
    fontSize: 10,
    color: "#0E00FF",
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  guestName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#2388FF",
    flex: 1,
  },
  headerVioletCont: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: 5,
  },
  violetText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "#0E00FF",
  },
  refNumber: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    //backgroundColor: "gray",
    marginTop: 10,
  },
  detailsGrid2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: "gray",
    marginBottom: 20,
  },
  detailsRow: {
    //backgroundColor: "yellow",
    justifyContent: "space-between", 
  },
  detailsRow2: {
    //backgroundColor: "yellow",
    justifyContent: "space-between",
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    marginVertical: 15,  // Adds spacing above & below the line
    width: '100%',       // Ensures full width
  },
  
  detailsLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666',
  },
  detailsValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  otherChargesCont: {
    flexDirection: "row", 
    //backgroundColor: "red", 
    justifyContent: "space-between"
  },
  leftBottomCont: {
    justifyContent: "space-between", 
    paddingVertical: 10,
  },
  BottomRowCont: {
    //backgroundColor: "green", 
    width: 395
  },
  assignStaffCont: {
    //backgroundColor: "red",
  },
  assignContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    //backgroundColor: "gray",
    marginRight: 15,
  },
  profilePlaceholder: {
    width: 40,
    height: 40,
    //backgroundColor: '#D9D9D9',
    marginRight: 10,
  },
  profilePic: {
    width: 40,         
    height: 40,         
    borderRadius: 30,    
    resizeMode: 'cover', 
  },
  assignTextContainer: {
    //backgroundColor: "red",
    alignSelf: "flex-start",
  },
  staffName: {
    fontSize: 15,
  },
  transactionDate: {
    fontSize: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    //backgroundColor: "blue",
  },
  button: {
    height: 50,
    borderWidth: 1,
    borderColor: "#2388FF",
    marginLeft: 20,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 115,
    //backgroundColor: "#FFD8D8",
    flexDirection: "row",
    paddingRight: 10,
  },
  buttonIcon: {
    transform: [{scaleX: .6},{scaleY: .6}],
  },
  checkIcon: {
    transform: [{scaleX: .4},{scaleY: .4}],
  },
  buttonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: "#2388FF",
  },
  
  
});

export default styles;
