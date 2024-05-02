import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList } from "../../types/navigation";

type PropsUser = NativeStackScreenProps<RootStackParamList, "User", "MyStack">;

export const User = ({ route, navigation }: PropsUser) => {
  const param = route.params;
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      {param?.user.avatar && (
        <Text>
          <img src={param?.user.avatar} alt="ava" />
        </Text>
      )}
      <Text>First Name: {param?.user.firstName}</Text>
      <Text>Last Name: {param?.user.lastName}</Text>
      <Text>
        location: city {param?.user.location.city} country{" "}
        {param?.user.location.country}
      </Text>
      <Text>role: {param?.user.role}</Text>
      <FlatList
        data={param?.user.skills}
        keyExtractor={(e, i) => "" + i}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default User;
