import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Button,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import TipsScreen from "./screens/TipsScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import TopNav from "./components/TopNav";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Tips" component={TipsScreen} />
    //     <Stack.Screen name="Schedule" component={ScheduleScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <SafeAreaView>
    <>
      <View style={styles.margin}></View>
      <TopNav />
    </>
    // {/* </SafeAreaView> */}
  );
}

const styles = StyleSheet.create({
  margin: {
    margin: 25,
  },
});
