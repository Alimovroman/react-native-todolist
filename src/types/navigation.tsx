import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Profile: { name: string };
  Auth: NavigatorScreenParams<RootAuthStackParamList>;
};
export type RootAuthStackParamList = {
  Login: undefined;
  Registration: undefined;
};

export type AuthScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootStackParamList, "Auth">,
  StackScreenProps<RootAuthStackParamList>
>;
