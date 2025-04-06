import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
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
    fontSize: 25,
    fontWeight: 'bold',
    flex: 1,
  },
  roomTag: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginLeft: 5,
  },
  roomText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  dateTag: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginLeft: 5,
  },
  dateText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  refNumber: {
    fontSize: 13,
    color: '#555',
    marginBottom: 5,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  detailsRow: {
    width: '15%', 
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    marginVertical: 15,  // Adds spacing above & below the line
    width: '100%',       // Ensures full width
  },
  
  detailsLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#666',
  },
  detailsValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginLeft: 10,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  assignContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    //backgroundColor: "blue",
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
  
});

export default styles;
