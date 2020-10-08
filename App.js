import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import SemesterListScreen from "./src/screens/SemesterListScreen";
import CourseListScreen from "./src/screens/CourseListScreen";

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName = "Home">
        <stack.Screen name = "Home" component = {HomeScreen} />
        <stack.Screen name = "Semester" component = {SemesterListScreen}/>
        <stack.Screen name = "Course" component = {CourseListScreen}/>


      </stack.Navigator>
    </NavigationContainer>
  )
  
}
