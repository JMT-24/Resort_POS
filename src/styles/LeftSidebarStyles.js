import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  sidebar: { 
    flex: .16,
    backgroundColor: '#ffffff', 
    padding: 20,
    alignItems: "center",
    paddingTop: 50
  },

  profileCircle: { 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    backgroundColor: '#111111', 
    marginBottom: 10
  },

  hotelName: { 
    fontSize: 18, 
    fontWeight: 'bold',
    textAlign: "center",
    marginBottom: 50,
  },

  staffName: { 
    fontSize: 18, 
    fontWeight: 'bold',
    textAlign: "center",
    marginBottom: 50,
  },

  staffRole: { 
    fontSize: 17, 
    color: '#777',
    marginBottom: 50
  },

  navButton: { 
    padding: 10, 
    backgroundColor: '#ddd', 
    marginTop: 10, 
    borderRadius: 5,
    width: "100%"
  },

  navText: { 
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: "center"
  },
});
