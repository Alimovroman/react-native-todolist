import Checkbox from "expo-checkbox";
import { ReactElement, ReactNode, useState } from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Input } from "./components/Input/Input";

type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

export default function App() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "HTML", isDone: true },
    { id: 2, title: "CSS", isDone: true },
    { id: 3, title: "JS", isDone: false },
    { id: 4, title: "React", isDone: true },
    { id: 5, title: "React-native", isDone: false },
  ]);

  const addTask = () => {
    const task: Task = { id: tasks.length + 1, title: value, isDone: false };
    setTasks([...tasks, task]);
    setValue("");
  };
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };
  const changeCheckBox = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
  };
  const changeShow = (id: number) => {
    setShow(id);
  };
  const changeTitle = (id: number, title: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, title } : t)));
    setShow(0);
  };

  return (
    <View style={styles.container}>
      <HideKeyBoard>
        <View
          style={[
            {
              width: "80%",
              alignItems: "center",
              paddingVertical: 20,
            },
          ]}
        >
          <TextInput
            style={[styles.input]}
            value={value}
            onChangeText={setValue}
          />
        </View>
      </HideKeyBoard>
      <View style={[{ backgroundColor: "#078080", marginBottom: 15 }]}>
        <Button
          title="Add task"
          onPress={addTask}
          color={"#232323"}
          disabled={value === ""}
        />
      </View>
      <View style={[styles.taskWrapper]}>
        {tasks.map((t) => {
          return (
            <View key={t.id} style={[styles.task, globalStyles.border]}>
              <View style={[{ backgroundColor: "#078080" }]}>
                <Button
                  title="X"
                  onPress={() => deleteTask(t.id)}
                  color={"#232323"}
                />
              </View>
              {show === t.id ? (
                <Input id={t.id} title={t.title} changeTitle={changeTitle} />
              ) : (
                <>
                  <Text onPress={() => setShow(t.id)}>{t.title}</Text>
                  <Checkbox
                    value={t.isDone}
                    onValueChange={() => changeCheckBox(t.id)}
                  />
                </>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const HideKeyBoard = ({ children }: { children: ReactNode }): ReactElement => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f5f2",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    backgroundColor: "#fff",
    fontSize: 16,
    padding: 4,
  },
  taskWrapper: {
    width: "60%",
  },
  task: {
    backgroundColor: "#fffffe",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
    paddingHorizontal: 20,
    marginBottom: 5,
  },
});

export const globalStyles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#232323",
  },
});
