import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  rightSidebar: { 
    flex: .3,  
    alignItems: "left",
    paddingTop: 25,
    //backgroundColor: "#555",
    paddingLeft: 15,
  },

  buttonContainer: {
    //backgroundColor: "blue",
    width: 300,
    alignItems: "flex-end" 
  },

  checkInButton: { 
    backgroundColor: 'black', 
    padding: 10, 
    borderRadius: 5, 
    width: 200,
    marginBottom: 10,
    alignItems: "center",
    alignSelf: "center"
  },

  checkInText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16 
  },

  barHeader: {
    //backgroundColor: "blue",
    width: 245,
    marginBottom: 15,
    flexDirection: "row",  // Align items in a row
    justifyContent: "space-between",  // Push "Sort" to the right
    alignItems: "center",
  },

  sidebarHeader: { 
    fontSize: 20, 
    marginBottom: 10,
    marginTop: 20,
    textAlign: "left",
    flex: 1
  },

  sidebarSort_btn: { 
    fontSize: 18, 
    marginBottom: 10,
    marginTop: 20,
    textAlign: "right",
    flex: 1
  },

  cottageBoxes: {
    backgroundColor: "#E6E6E6",
    padding: 15,
    alignItems: "flex-start",
    height: "80%",
    width: 250,
    borderRadius: 5
  },

  subHeader: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 5,
    marginLeft: 15, 
    textAlign: "left", 
    alignSelf: "flex-start" 
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
    borderRadius: 5 
  },

  available: { 
    backgroundColor: "#FFFFFF",
    color: "black"
  },

  unavailable: { 
    backgroundColor: '#FFA0A0',
    color: '#fff'  
  },

  cottageText: { 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
});
