import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../../../GlobalStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  AuthScreenProps,
  RootAuthStackParamList,
  RootStackParamList,
} from "../../types/navigation";

export const Registration = ({ navigation }: AuthScreenProps) => {
  return (
    <View style={[globalStyles.center]}>
      <Text>Registration</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};
