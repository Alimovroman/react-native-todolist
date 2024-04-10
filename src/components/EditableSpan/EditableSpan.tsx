import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

type EditableSpanPropsType = {
  value: string;
  onChange: (newValue: string) => void;
};

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
  console.log("EditableSpan called");
  let [editMode, setEditMode] = useState(false);
  let [title, setTitle] = useState(props.value);

  const activateEditMode = () => {
    setEditMode(true);
    setTitle(props.value);
  };
  const activateViewMode = () => {
    setEditMode(false);
    props.onChange(title);
  };
  const changeTitle = (e: string) => {
    setTitle(e);
  };

  return editMode ? (
    <View style={{ flexDirection: "row" }}>
      <TextInput
        value={title}
        onChangeText={changeTitle}
        style={[styles.input]}
      />
      <View>
        <Ionicons
          name="checkmark"
          size={28}
          color="black"
          onPress={activateViewMode}
        />
      </View>
    </View>
  ) : (
    <Text
      onLongPress={activateEditMode}
      style={{ fontSize: 18, fontWeight: "500" }}
    >
      {props.value}
    </Text>
  );
});

const styles = StyleSheet.create({
  input: {
    width: 150,
    backgroundColor: "#ffdbdb",
  },
});
