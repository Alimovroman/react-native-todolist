import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../../../GlobalStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  AuthScreenProps,
  RootAuthStackParamList,
  RootStackParamList,
} from "../../types/navigation";

export const Login = ({ navigation }: AuthScreenProps) => {
  return (
    <View style={[globalStyles.center]}>
      <Text>Login</Text>
      <Button
        title="Registration"
        onPress={() => navigation.navigate("Auth", { screen: "Registration" })}
      />
    </View>
  );
};
