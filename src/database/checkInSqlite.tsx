import { openDatabase, deleteDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

/**
 * Deletes the existing database file to start fresh.
 */
export const deleteDB = async (): Promise<void> => {
  if (db) {
    await db.close();  // close connection if open
    db = null;
  }
  try {
    await deleteDatabase({ name: 'resort.db', location: 'default' });
    console.log('Database deleted successfully');
  } catch (error) {
    console.error('Failed to delete database:', error);
    throw error;
  }
};


let db: SQLiteDatabase;

export const getDBConnection = async (): Promise<SQLiteDatabase> => {
  if (db) return db;
  db = await openDatabase({ name: 'resort.db', location: 'default' });
  return db;
};

export const initializeTables = async () => {
  const db = await getDBConnection();

  await db.executeSql(`CREATE TABLE IF NOT EXISTS Guests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT,
    lastname TEXT,
    contactNo TEXT,
    address TEXT
  );`);

  await db.executeSql(`CREATE TABLE IF NOT EXISTS Bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    guestId INTEGER,
    cottageNumbers TEXT,
    startDate TEXT,
    endDate TEXT,
    startTime TEXT,
    endTime TEXT,
    isCustomTime INTEGER,
    type TEXT,
    status TEXT,
    timestamp TEXT,
    FOREIGN KEY (guestId) REFERENCES Guests(id)
  );`);

  await db.executeSql(`CREATE TABLE IF NOT EXISTS GuestCounts (
    bookingId INTEGER,
    adult INTEGER,
    senior INTEGER,
    kids INTEGER,
    pwd INTEGER,
    FOREIGN KEY (bookingId) REFERENCES Bookings(id)
  );`);

  await db.executeSql(`CREATE TABLE IF NOT EXISTS Charges (
    bookingId INTEGER,
    cottages INTEGER,
    electric INTEGER,
    roundTable INTEGER,
    longTable INTEGER,
    chairs INTEGER,
    corkCage INTEGER,
    FOREIGN KEY (bookingId) REFERENCES Bookings(id)
  );`);
};

export const saveCheckInData = async (
  guest: { firstname: string; lastname: string; contactNo: string; address: string },
  guestCounts: { adult: number; senior: number; kids: number; pwd: number },
  charges: { cottages: number; electric: number; roundTable: number; longTable: number; chairs: number; corkCage: number },
  booking: { cottageNumbers: number[]; startDate: string; endDate: string; startTime: string; endTime: string; isCustomTime: boolean; type: string; status: string; timestamp: string }
) => {
  const db = await getDBConnection();

  const result = await db.executeSql(
    `INSERT INTO Guests (firstname, lastname, contactNo, address) VALUES (?, ?, ?, ?)`,
    [guest.firstname, guest.lastname, guest.contactNo, guest.address]
  );
  const guestId = result[0].insertId;

  const bookingResult = await db.executeSql(
    `INSERT INTO Bookings (guestId, cottageNumbers, startDate, endDate, startTime, endTime, isCustomTime, type, status, timestamp)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      guestId,
      JSON.stringify(booking.cottageNumbers),
      booking.startDate,
      booking.endDate,
      booking.startTime,
      booking.endTime,
      booking.isCustomTime ? 1 : 0,
      booking.type,
      booking.status,
      booking.timestamp,
    ]
  );
  const bookingId = bookingResult[0].insertId;

  await db.executeSql(
    `INSERT INTO GuestCounts (bookingId, adult, senior, kids, pwd) VALUES (?, ?, ?, ?, ?)`,
    [bookingId, guestCounts.adult, guestCounts.senior, guestCounts.kids, guestCounts.pwd]
  );

  await db.executeSql(
    `INSERT INTO Charges (bookingId, cottages, electric, roundTable, longTable, chairs, corkCage) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      bookingId,
      charges.cottages,
      charges.electric,
      charges.roundTable,
      charges.longTable,
      charges.chairs,
      charges.corkCage,
    ]
  );
};

export const getAllCheckIns = async (): Promise<GuestCheckIn[]> => {
  const db = await getDBConnection();
  const results = await db.executeSql(`
    SELECT Bookings.*, Guests.firstname, Guests.lastname, Guests.contactNo, Guests.address,
           GuestCounts.adult, GuestCounts.senior, GuestCounts.kids, GuestCounts.pwd,
           Charges.cottages, Charges.electric, Charges.roundTable, Charges.longTable, Charges.chairs, Charges.corkCage
    FROM Bookings
    JOIN Guests ON Bookings.guestId = Guests.id
    JOIN GuestCounts ON GuestCounts.bookingId = Bookings.id
    JOIN Charges ON Charges.bookingId = Bookings.id
  `);

  const rows = results[0].rows.raw();

  const data: GuestCheckIn[] = rows.map((row: any) => ({
    id: row.id,
    firstname: row.firstname,
    lastname: row.lastname,
    contactNo: row.contactNo,
    address: row.address,
    cottageNumbers: row.cottageNumbers ? JSON.parse(row.cottageNumbers) : [],
    startDate: row.startDate,
    endDate: row.endDate,
    startTime: row.startTime,
    endTime: row.endTime,
    isCustomTime: !!row.isCustomTime,
    bookingType: row.type as 'walk-in' | 'reservation',
    status: row.status as 'checked-in' | 'checked-out' | 'cancelled',
    timestamp: row.timestamp,
    guests: {
      adult: row.adult,
      senior: row.senior,
      kids: row.kids,
      pwd: row.pwd
    },
    items: {
      cottages: row.cottages,
      electric: row.electric,
      roundTable: row.roundTable,
      longTable: row.longTable,
      chairs: row.chairs,
      corkCage: row.corkCage
    }
  }));

  return data;
};


export const getReservedCottages = async () => {
  const db = await getDBConnection();
  const results = await db.executeSql(
    `SELECT cottageNumbers FROM Bookings WHERE status != 'cancelled'`
  );

  const allCottageNumbers = results[0].rows.raw()
  .map((row: { cottageNumbers: string }) => {
    try {
      return JSON.parse(row.cottageNumbers || '[]');
    } catch (e) {
      console.warn('Failed to parse cottageNumbers:', row.cottageNumbers);
      return [];
    }
  })
  .flat();


  return allCottageNumbers;
};


export type GuestCheckIn = {
  id: number;
  firstname: string;
  lastname: string;
  contactNo: string;
  address: string;
  cottageNumbers: number[];
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  isCustomTime: boolean;
  bookingType: 'walk-in' | 'reservation';
  status: 'checked-in' | 'checked-out' | 'cancelled';
  timestamp: string;
  guests: {
    adult: number;
    senior: number;
    kids: number;
    pwd: number;
  };
  items: {
    cottages: number;
    electric: number;
    roundTable: number;
    longTable: number;
    chairs: number;
    corkCage: number;
  };
};


export const clearAllData = async () => {
  const db = await getDBConnection();

  try {
    await db.executeSql('DELETE FROM Charges');
    await db.executeSql('DELETE FROM GuestCounts');
    await db.executeSql('DELETE FROM Bookings');
    await db.executeSql('DELETE FROM Guests');

    console.log('All data deleted successfully from all tables.');
  } catch (error) {
    console.error('Failed to clear all data:', error);
    throw error;
  }
};


export const deleteTransactionById = async (bookingId: number) => {
  const db = await getDBConnection();

  try {
    // First, get the guestId related to this booking
    const result = await db.executeSql(`SELECT guestId FROM Bookings WHERE id = ?`, [bookingId]);
    const guestId = result[0].rows.length > 0 ? result[0].rows.item(0).guestId : null;

    if (!guestId) {
      console.warn(`No guestId found for bookingId ${bookingId}`);
      return;
    }

    // Delete related data in correct order to maintain referential integrity
    await db.executeSql(`DELETE FROM Charges WHERE bookingId = ?`, [bookingId]);
    await db.executeSql(`DELETE FROM GuestCounts WHERE bookingId = ?`, [bookingId]);
    await db.executeSql(`DELETE FROM Bookings WHERE id = ?`, [bookingId]);
    await db.executeSql(`DELETE FROM Guests WHERE id = ?`, [guestId]);

    console.log(`Deleted transaction ${bookingId} and its related data successfully.`);
  } catch (error) {
    console.error(`Failed to delete transaction ${bookingId}:`, error);
    throw error;
  }
};
