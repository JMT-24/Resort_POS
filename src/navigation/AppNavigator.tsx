import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CheckInScreen from "../screens/CheckInScreen";
import CalendarScreen from "../screens/CalendarScreen";
import PricesScreen from "../screens/PricesScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="CheckIn" 
          component={CheckInScreen} 
          options={{ headerShown: false }} // Hide default header
        />
        <Stack.Screen 
          name="Calendar" 
          component={CalendarScreen} 
          options={{ headerShown: true }} 
        />
        <Stack.Screen 
          name="Prices" 
          component={PricesScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
