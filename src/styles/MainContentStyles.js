import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContent: {
    flex: .7,
    padding: 15,
    //backgroundColor: 'gray',
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
    flexDirection: "row", 
    justifyContent: "space-between",  
    alignItems: "center",
    paddingVertical: 10,
    //backgroundColor: "yellow",
  },
  
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2388FF",
  },
  
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#2388FF',
    alignItems: 'center',
    margin: 10,
    width: "70%",
  },
  searchIcon: {
    transform: [{scaleX: .6}, {scaleY: .6}],
  },
  input: {
    flex: 1,
    color: '#2388FF',
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 4,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#2388FF',
    paddingHorizontal: 30,
    paddingVertical: 13,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  
});

export default styles;
