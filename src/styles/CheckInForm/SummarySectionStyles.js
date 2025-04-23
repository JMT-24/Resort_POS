import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  summaryBox: {
    position: 'absolute',
    bottom: 25,
    left: 685,
    right: 0,
    height: 550,
    width: '33%',
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 10,
  },
  scrollView: {
    height: '100%',
    //backgroundColor: "gray",
  },
  paymentDetailsSummary: {
    height: '320',
    //backgroundColor: "red",
  },
  detailSummaryField: {
    height: 50,
    width: '100%',
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: "blue",
  },
  formTogglePic: {
    height: 40,
    width: 40,
    borderRadius: 20,
    resizeMode: 'cover',
    backgroundColor: "gray",
  },
  detail_miniField: {
    flexDirection: 'column',
    width: '80%',
    marginLeft: 15,
  },
  detail_subminiField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryLabel: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  paymentDetailsContainer: {
    height: 170,
    flexDirection: 'column',
    marginTop: 25,
  },
  paymentDetailHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailsField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  horizontalLine: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  paymentDetailLabel: {
    fontSize: 14,
  },
  paymentDetailData: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  Confirmbtn: {
    backgroundColor: '#164CFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    marginTop: 15,
  },
  ConfirmbtnText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
