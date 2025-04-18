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
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  guestName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#2388FF",
    flex: 1,
  },
  cottageNumTag: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 15,
    paddingVertical: 4,
    marginLeft: 5,
  },
  cottageNumText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "#0E00FF",
  },
  dateTag: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 15,
    paddingVertical: 4,
    marginLeft: 10,
  },
  dateText: {
    fontSize: 14,
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
    marginVertical: 10,
    //backgroundColor: "gray",
  },
  detailsRow: {
    width: 120, 
    //backgroundColor: "yellow" 
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    marginVertical: 15,  // Adds spacing above & below the line
    width: '100%',       // Ensures full width
  },
  
  detailsLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
  },
  detailsValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 60,
    //backgroundColor: "blue",
  },
  assignContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    //backgroundColor: "blue",
    marginRight: 95,
  },
  profilePlaceholder: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#D9D9D9',
    marginRight: 10,
  },
  assignText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#2388FF",
    marginLeft: 20,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#2388FF",
  },
  
  
});

export default styles;
