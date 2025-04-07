// src/services/sqliteService.ts

import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

const DB_NAME = 'mydb.db';

export const getDBConnection = async () => {
  return SQLite.openDatabase({ name: DB_NAME, location: 'default' });
};

export const initDatabase = async () => {
  const db = await getDBConnection();
  await db.executeSql(
    `CREATE TABLE IF NOT EXISTS testCollection (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    );`
  );

  // Optional: only insert sample if table is empty
  const results = await db.executeSql(`SELECT COUNT(*) as count FROM testCollection;`);
  const count = results[0].rows.item(0).count;
  if (count === 0) {
    await db.executeSql(`INSERT INTO testCollection (name) VALUES (?);`, ['JM Torres']);
  }

  return db;
};

export const fetchFirstName = async (): Promise<string> => {
  const db = await getDBConnection();
  const results = await db.executeSql(`SELECT name FROM testCollection LIMIT 1;`);
  return results[0].rows.item(0).name;
};
