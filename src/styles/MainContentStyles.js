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
    backgroundColor: '#2388FF',
    flex: 0.2,
    alignItems: 'center',
    marginRight: 10,
  },
  activeTabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  inactiveTab: {
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: "#A2CDFF",
    flex: 0.2,
    alignItems: 'center',
    marginRight: 10,
  },
  inactiveTabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A2CDFF',
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
    color: "#2388FF",
  },
  
  headerSortBtn: {
    fontSize: 16,
  },
  
});

export default styles;
