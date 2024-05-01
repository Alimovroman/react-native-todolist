import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../../../GlobalStyles";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./Login";
import { Registration } from "./Registaration";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  RootAuthStackParamList,
  RootStackParamList,
} from "../../types/navigation";

const Stack = createStackNavigator<RootAuthStackParamList>();
// export const Stack = createBottomTabNavigator<RootAuthStackParamList>();
// const Stack = createNativeStackNavigator<RootAuthStackParamList>();

export const RootAuth = () => {
  return (
    <Stack.Navigator>
      {/* <View style={[globalStyles.center]}> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      {/* </View> */}
    </Stack.Navigator>
  );
};
