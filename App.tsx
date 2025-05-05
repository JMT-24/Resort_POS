import React, { PureComponent, useEffect } from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { initializeTables } from "./src/database/checkInSqlite";
import { createPriceListTable } from "./src/database/priceListSQLite";

const App = () => {
  useEffect(() => {
    const initDB = async () => {
      try {
        await initializeTables();
        console.log('tables all initialized created');
      } catch (error) {
        console.error('❌ Failed to initialize DB:', error);
      }
      try {
        await createPriceListTable();
        console.log("Price List created");
      } catch (error) {
        console.error('Failed to make the price list table:', error);
      }
    };

    initDB();
  }, []);

  return <AppNavigator />;
};

export default App;
