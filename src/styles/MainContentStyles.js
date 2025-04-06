import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContent: {
    flex: .7,
    padding: 15,
    //backgroundColor: '#F5F5F5',
    paddingTop: 30
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  activeTab: {
    padding: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    flex: 0.2,
    alignItems: 'center',
    marginRight: 10,
  },
  inactiveTab: {
    padding: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    flex: 0.2,
    alignItems: 'center',
    marginRight: 10,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  header: {
    flexDirection: "row",  // Align items in a row
    justifyContent: "space-between",  // Push "Sort" to the right
    alignItems: "center",
    paddingVertical: 10,
  },
  
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  
  headerSortBtn: {
    fontSize: 16,
  },
  
});

export default styles;
