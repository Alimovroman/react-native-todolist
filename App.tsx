// import Checkbox from "expo-checkbox";
import { ReactElement, ReactNode, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
// import { Input } from "./components/Input/Input";
import { Main } from "./src/app/App";
import { store } from "./src/app/store";
import { Provider } from "react-redux";

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
    <Provider store={store}>
      <View style={styles.container}>
        <Main />
      </View>
    </Provider>
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
    // alignItems: "center",
    // justifyContent: "center",
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

// export const globalStyles = StyleSheet.create({
//   border: {
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: "#232323",
//   },
// });

// import {tasksReducer} from '../features/TodolistsList/tasks-reducer';
// import {todolistsReducer} from '../features/TodolistsList/todolists-reducer';
// import {applyMiddleware, combineReducers, createStore} from 'redux'
// import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
// import {appReducer} from './app-reducer'
// import {authReducer} from '../features/Login/auth-reducer'
// import {configureStore, UnknownAction} from "@reduxjs/toolkit";

// const rootReducer = combineReducers({
// 	tasks: tasksReducer,
// 	todolists: todolistsReducer,
// 	app: appReducer,
// 	auth: authReducer
// })

// // ❗старая запись, с новыми версиями не работает
// //  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// export const store = configureStore({reducer: rootReducer},)

// export type AppRootStateType = ReturnType<typeof rootReducer>

// // ❗ UnknownAction вместо AnyAction
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, UnknownAction>

// // export type AppDispatch = typeof store.dispatch
// // ❗ UnknownAction вместо AnyAction
// export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, UnknownAction>
