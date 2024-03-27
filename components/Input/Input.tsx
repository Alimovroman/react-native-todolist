import { FC, useState } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";
import { globalStyles } from "../../App";

type Props = {
  title: string;
  id: number;
  changeTitle: (id: number, title: string) => void;
};
export const Input: FC<Props> = ({ title, id, changeTitle }: Props) => {
  const [value, setValue] = useState(title);

  const onChangeValue = (newTitle: string) => {
    setValue(newTitle);
  };
  const onHandlerButton = () => {
    changeTitle(id, value);
    setValue("");
  };
  return (
    <View style={[{ flexDirection: "row" }]}>
      <TextInput
        value={value}
        style={[styles.input, globalStyles.border]}
        onChangeText={onChangeValue}
      />
      <Button title="+" color={"#232323"} onPress={onHandlerButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    backgroundColor: "#fff",
    fontSize: 16,
    padding: 4,
  },
});
