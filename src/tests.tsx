import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PouchDB from '@craftzdog/pouchdb-core-react-native'; // Correct PouchDB core import
import SQLiteAdapterFactory from 'pouchdb-adapter-react-native-sqlite'; // Correct SQLite adapter import

// Apply SQLite adapter to PouchDB
PouchDB.plugin(SQLiteAdapterFactory);

// Define the document type
type Doc = {
  _id: string;
  title: string;
  createdAt: string;
};

// Initialize the PouchDB database with SQLite adapter
const db = new PouchDB('hello_world_db', { adapter: 'react-native-sqlite' });

export default function HelloWorld() {
  const [doc, setDoc] = useState<Doc | null>(null);

  const addDoc = async () => {
    const newDoc: Doc = {
      _id: new Date().toISOString(),
      title: 'Hello, PouchDB!',
      createdAt: new Date().toString(),
    };

    try {
      await db.put(newDoc); // Add the document to PouchDB
      console.log('Document added:', newDoc);
      fetchDoc(newDoc._id); // Fetch the document by its ID after adding
    } catch (err) {
      console.log('Error adding document:', err);
    }
  };

  const fetchDoc = async (id: string) => {
    try {
      const result = await db.get(id) as Doc; // Type assertion to Doc
      setDoc(result);
    } catch (err) {
      console.log('Error fetching document:', err);
    }
  };

  useEffect(() => {
    // Don't try to fetch on mount using a new ID; it won't exist yet
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PouchDB Hello World</Text>
      <TouchableOpacity style={styles.button} onPress={addDoc}>
        <Text style={styles.buttonText}>Add Document</Text>
      </TouchableOpacity>
      {doc ? (
        <View style={styles.card}>
          <Text>Title: {doc.title}</Text>
          <Text>Created At: {doc.createdAt}</Text>
        </View>
      ) : (
        <Text>No document found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f2f2f2',
    marginTop: 10,
    borderRadius: 8,
  },
});
