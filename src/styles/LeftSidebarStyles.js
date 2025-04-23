import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  sidebar: {
    flex: 0.18,
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
    marginTop: 30,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  navButton: { 
    padding: 10, 
    marginVertical: 8,
    borderRadius: 50,
    width: "85%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  isHovered: {
    backgroundColor: '#FFFFFF3B', 
  },
  pressed: {
    backgroundColor: '#FFFFFF3B', 
  },
  activePage: {
    backgroundColor: '#FFFFFF3B',
  },
  navButtonIcon: {
    //backgroundColor: "gray"
    transform: [{scaleX: .7}, {scaleY: .7}]
  },
  navText: { 
    fontSize: 15,
    textAlign: "center",
    color: "white",
    //backgroundColor: "yellow",
    marginHorizontal: 5,
  },

  
  staffContainer: {
    //backgroundColor: "whitesmoke",
    marginTop: 50,
    flexDirection: "row",
    width: "100%",
    height: 50,
    justifyContent: "center",
  },
  staffContLeft: {
    //backgroundColor: 'gray',
    width: '25%',
    alignItems: 'center', 
    justifyContent: 'flex-start',
  },
  
  staffPic: {
    width: 35,         
    height: 35,         
    borderRadius: 30,    
    resizeMode: 'cover', 
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
