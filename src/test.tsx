import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Realm from 'realm';

const TaskSchema = {
  name: 'Task',
  properties: {
    id: 'int',
    name: 'string',
    completed: 'bool',
  },
  primaryKey: 'id',
};

const RealmTest = () => {
  const handleRealmDebug = async () => {
    const realmPath = Realm.defaultPath;
    console.log(`Realm Database Path: ${realmPath}`);

    Realm.deleteFile({ path: realmPath });
    console.log('Previous Realm database deleted');

    let realm;
    try {
      realm = await Realm.open({ path: 'myrealm', schema: [TaskSchema] });
      console.log('Realm initialized');
    } catch (error) {
      console.error('Error initializing Realm:', error);
      return;
    }

    let existingTask;
    try {
      existingTask = realm.objectForPrimaryKey('Task', 1);
      console.log('Existing task:', existingTask);
    } catch (error) {
      console.error('Error fetching existing task:', error);
    }

    if (!existingTask) {
      console.log('Creating new task');
      try {
        realm.write(() => {
          realm.create('Task', { id: 1, name: 'Hello World', completed: false });
        });
        console.log('New task created');
      } catch (error) {
        console.error('Error creating new task:', error);
      }
    } else {
      console.log('Task already exists, updating...');
      try {
        realm.write(() => {
          existingTask.name = 'Updated Task Name';
          existingTask.completed = true;
        });
        console.log('Task updated');
      } catch (error) {
        console.error('Error updating task:', error);
      }
    }

    try {
      const tasks = realm.objects('Task');
      console.log('Tasks fetched:', tasks);

      if (tasks.length > 0) {
        tasks.forEach((task) => {
          console.log('Task:', task);
        });
      } else {
        console.log('No tasks found');
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }

    realm.close();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Hello World! Press the button to debug Realm.</Text>
        <TouchableOpacity style={styles.button} onPress={handleRealmDebug}>
          <Text style={styles.buttonText}>Debug Realm Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RealmTest;
