import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

const DB_NAME = 'checkin.db';

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
      cottageNumbers TEXT,
      startDate TEXT,
      endDate TEXT,
      startTime TEXT,
      endTime TEXT,
      isCustomTime INTEGER 
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
  cottageNumbers: number[],
  startDate: string,
  endDate: string,
  startTime: string,
  endTime: string,
  isCustomTime: boolean,
) => {
  const db = await getDBConnection();

  await db.executeSql(
    `INSERT INTO guestCheckIn (
      firstname, lastname, contactNo, address,
      adult, senior, kids, pwd,
      cottages, electric, roundTable, longTable, chairs, corkCage, cottageNumbers, startDate, endDate, startTime, endTime, isCustomTime
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
      JSON.stringify(cottageNumbers),
      startDate,
      endDate,
      startTime,
      endTime,
      isCustomTime ? 1 : 0,
    ]
  );
};

export const getAllCheckIns = async (): Promise<GuestCheckIn[]> => {
  const db = await getDBConnection();
  const results = await db.executeSql(`SELECT * FROM guestCheckIn ORDER BY id DESC`);
  const rows = results[0].rows;
  const checkIns: GuestCheckIn[] = [];

  for (let i = 0; i < rows.length; i++) {
    const item = rows.item(i);

    checkIns.push({
      ...item,
      cottageNumbers: item.cottageNumbers
        ? JSON.parse(item.cottageNumbers)
        : [],
      isCustomTime: !!item.isCustomTime, // convert 0/1 to boolean
    });
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
  cottageNumbers: number[];
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  isCustomTime: boolean;
}

export const getReservedCottages = async (): Promise<number[]> => {
  const db = await getDBConnection();
  const results = await db.executeSql(`SELECT cottageNumbers FROM guestCheckIn`);
  const rows = results[0].rows;
  const reserved: number[] = [];

  for (let i = 0; i < rows.length; i++) {
    const raw = rows.item(i).cottageNumbers;
    try {
      const parsed: number[] = JSON.parse(raw);
      reserved.push(...parsed);
    } catch (e) {
      console.warn('Failed to parse cottageNumbers for row', i, raw);
    }
  }

  return reserved;
};
