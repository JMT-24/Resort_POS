// import React, { useEffect, useState } from 'react';
// import { Text, View, Button } from 'react-native';
// import firestore from '@react-native-firebase/firestore';

// const App = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Initialize Firebase when the app starts
//     const testCollection = firestore().collection('testCollection');

//     // Fetch data from Firebase Firestore
//     const unsubscribe = testCollection.onSnapshot(
//       snapshot => {
//         if (snapshot && !snapshot.empty) {
//           const dataList = snapshot.docs.map(doc => doc.data());
//           setData(dataList);
//         } else {
//           setData([]); // If no data, set an empty array
//         }
//       },
//       error => {
//         console.error('Error fetching data:', error);
//       }
//     );

//     // Clean up subscription on unmount
//     return () => unsubscribe();
//   }, []);

//   const addTestData = async () => {
//     // Add a document to the testcollection with a name field
//     try {
//       await firestore().collection('testCollection').add({
//         name: 'Hello World',
//       });
//       console.log('Test data added');
//     } catch (error) {
//       console.error('Error adding test data:', error);
//     }
//   };

//   return (
//     <View>
//       <Text>Firebase Data:</Text>
//       <Button title="Add Test Data" onPress={addTestData} />
//       <View>
//         {data ? (
//           data.map((item, index) => (
//             <Text key={index}>
//               {item.name} {/* Display the name field */}
//             </Text>
//           ))
//         ) : (
//           <Text>Loading...</Text>
//         )}
//       </View>
//     </View>
//   );
// };

// export default App;

import React, { PureComponent, useEffect } from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { initCheckInTable } from "./src/database/checkInSqlite";

const App = () => {
  useEffect(() => {
    const initDB = async () => {
      try {
        await initCheckInTable();
        console.log('table created');
      } catch (error) {
        console.error('❌ Failed to initialize DB:', error);
      }
    };

    initDB();
  }, []);

  return <AppNavigator />;
};

export default App;
