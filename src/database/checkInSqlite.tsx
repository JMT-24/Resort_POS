import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

const DB_NAME = 'checkin2.db';

export const getDBConnection = async () => {
  return SQLite.openDatabase({ name: DB_NAME, location: 'default' });
};

// 🧱 Create the table
export const initCheckInTable = async () => {
  const db = await getDBConnection();

  await db.executeSql(`
    CREATE TABLE IF NOT EXISTS guestCheckIn (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstname TEXT,
      lastname TEXT,
      contactNo TEXT,
      address TEXT,
      adult INTEGER,
      senior INTEGER,
      kids INTEGER,
      pwd INTEGER,
      cottages INTEGER,
      electric INTEGER,
      roundTable INTEGER,
      longTable INTEGER,
      chairs INTEGER,
      corkCage INTEGER,
      cottageNumber INTEGER
    );
  `);

  return db;
};

// 💾 Save check-in record
/// edit tables for cottageNumbers and DateTime
export const saveCheckInData = async (
  firstname: string,
  lastname: string,
  contactNo: string,
  address: string,
  guestCounts: { adult: number; senior: number; kids: number; pwd: number },
  charges: { cottages: number; electric: number; roundTable: number; longTable: number; chairs: number; corkCage: number },
  cottageNumber: number
) => {
  const db = await getDBConnection();

  await db.executeSql(
    `INSERT INTO guestCheckIn (
      firstname, lastname, contactNo, address,
      adult, senior, kids, pwd,
      cottages, electric, roundTable, longTable, chairs, corkCage, cottageNumber
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      firstname,
      lastname,
      contactNo,
      address,
      guestCounts.adult,
      guestCounts.senior,
      guestCounts.kids,
      guestCounts.pwd,
      charges.cottages,
      charges.electric,
      charges.roundTable,
      charges.longTable,
      charges.chairs,
      charges.corkCage,
      cottageNumber
    ]
  );
};

// 📥 Fetch all check-in records
export const getAllCheckIns = async (): Promise<GuestCheckIn[]> => {
  const db = await getDBConnection();
  const results = await db.executeSql(`SELECT * FROM guestCheckIn ORDER BY id DESC`);
  const rows = results[0].rows;
  const checkIns: GuestCheckIn[] = [];

  for (let i = 0; i < rows.length; i++) {
    checkIns.push(rows.item(i));
  }

  return checkIns;
};

export interface GuestCheckIn {
  id: number;
  firstname: string;
  lastname: string;
  contactNo: string;
  address: string;
  adult: number;
  senior: number;
  kids: number;
  pwd: number;
  cottages: number;
  electric: number;
  roundTable: number;
  longTable: number;
  chairs: number;
  corkCage: number;
  cottageNumber: number;
}

export const getReservedCottages = async (): Promise<number[]> => {
  const db = await getDBConnection();
  const results = await db.executeSql(`SELECT cottageNumber FROM guestCheckIn`);
  const rows = results[0].rows;
  const reserved: number[] = [];

  for (let i = 0; i < rows.length; i++) {
    const cottageNum = rows.item(i).cottageNumber;
    if (typeof cottageNum === 'number') {
      reserved.push(cottageNum);
    }
  }

  return reserved;
};
