import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  rightSidebar: { 
    flex: .3,  
    alignItems: "left",
    paddingTop: 15,
    //backgroundColor: "#555",
  },

  buttonContainer: {
    //backgroundColor: "blue",
    width: 300,
    alignItems: "flex-end" 
  },

  checkInButton: { 
    backgroundColor: '#23DABC', 
    padding: 10, 
    width: 250,
    height: 50,
    alignItems: "center",
    alignSelf: "left",
    justifyContent: "center",
  },

  checkInText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 18,
  },

  cottageBoxes: {
    backgroundColor: "white",
    padding: 15,
    alignItems: "flex-start",
    height: 440,
    width: 250,
    borderRadius: 5,
    marginTop: 80,
  },

  HeaderContainer: {
    borderWidth: 1,
    borderColor: "#CFCFCF",
    width: 150,
    height: 45,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  Header: {
    color: "#2388FF",
    fontWeight: "900",
    fontSize: 16,
  },
  subHeader: {
    fontSize: 12,
    fontWeight: "bold",
  },

  cottagesGrid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    paddingLeft: 8,
    //backgroundColor: "#444",
    marginTop: 10
  },

  cottageBox: { 
    width: 55, 
    height: 55, 
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 5, 
  },

  available: { 
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#2388FF",
  },

  unavailable: { 
    backgroundColor: '#FFD8D8',
    borderWidth: 1,
    borderColor: "#4848483B",
  },

  cottageText: { 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
});
