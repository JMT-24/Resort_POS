import { getDBConnection } from "./checkInSqlite";
import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

export const createPriceListTable = async () => {
    const db = await getDBConnection();
    await db.executeSql(`
      CREATE TABLE IF NOT EXISTS priceList (
        id INTEGER PRIMARY KEY NOT NULL,
        adults REAL,
        kids REAL,
        senior REAL,
        pwd REAL,
        cottage REAL,
        electric REAL,
        roundTable REAL,
        longTable REAL,
        chairs REAL,
        corkCage REAL
      );
    `);
  };

  export type PriceList = {
    adults: number;
    kids: number;
    senior: number;
    pwd: number;
    cottage: number;
    electric: number;
    roundTable: number;
    longTable: number;
    chairs: number;
    corkCage: number;
  };

  export const savePriceList = async (prices: PriceList) => {
    const db = await getDBConnection();
    await db.executeSql(
      `INSERT OR REPLACE INTO priceList 
        (id, adults, kids, senior, pwd, cottage, electric, roundTable, longTable, chairs, corkCage)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [1, prices.adults, prices.kids, prices.senior, prices.pwd, prices.cottage,
       prices.electric, prices.roundTable, prices.longTable, prices.chairs, prices.corkCage]
    );
  };

  export const getPriceList = async (): Promise<PriceList | null> => {
    const db = await getDBConnection();
    const results = await db.executeSql(`SELECT * FROM priceList WHERE id = 1`);
    const rows = results[0].rows;
  
    if (rows.length > 0) {
      return rows.item(0);
    }
  
    return null;
  };

  export const initializeDefaultPriceList = async () => {
    const existing = await getPriceList();
    if (!existing) {
      await savePriceList({
        adults: 100,
        kids: 50,
        senior: 80,
        pwd: 80,
        cottage: 300,
        electric: 100,
        roundTable: 30,
        longTable: 40,
        chairs: 10,
        corkCage: 200,
      });
    }
    console.log("initialized price list");
  };
  


  