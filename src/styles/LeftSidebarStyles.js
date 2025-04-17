import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  sidebar: {
    flex: 0.14,
    backgroundColor: '#2388FF',
    alignItems: 'center',
    display: "flex",
    justifyContent: "flex-start",
    paddingTop: 30,
  
    elevation: 10,
    shadowColor: '#000', 
    zIndex: 1,  
  },
  

  pictureCircle: { 
    width: 100, 
    height: 100, 
    borderRadius: 100, 
    backgroundColor: '#111111', 
    marginBottom: 10
  },

  hotelName: { 
    fontSize: 18, 
    fontWeight: 'bold',
    textAlign: "center",
    marginBottom: 50,
  },




  navButtonContainer: {
    //  backgroundColor: "indigo",
    marginTop: 50,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  navButton: { 
    padding: 10, 
    backgroundColor: '#FFFFFF3B', 
    marginVertical: 8,
    borderRadius: 50,
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navButtonIcon: {
    //backgroundColor: "gray"
    transform: [{scaleX: .8}, {scaleY: .8}]
  },
  navText: { 
    fontSize: 16,
    textAlign: "center",
    color: "white",
    //backgroundColor: "yellow",
    marginHorizontal: 5,
  },

  
  staffContainer: {
    //backgroundColor: "whitesmoke",
    marginTop: 80,
    flexDirection: "row",
    width: "100%",
    height: 50,
    justifyContent: "center",
  },
  staffContLeft: {
    backgroundColor: "gray",
    width: "25%",
    borderRadius: 100,
    marginRight: 5,
  },
  staffContRight: {
    //backgroundColor: "yellow",
    width: "60%",
    display: "flex",
  },

  staffName: { 
    fontSize: 14, 
    fontWeight: 'bold',
    textAlign: "center",
    color: "white",
  },

  staffRole: { 
    fontSize: 12, 
    color: "white",
  },
});
