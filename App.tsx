// import Checkbox from "expo-checkbox";
import { ReactElement, ReactNode, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  FlatList,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
// import { Input } from "./components/Input/Input";
import { Main } from "./src/app/App";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { RootStackParamList } from "./src/types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootAuth } from "./src/Screens/AuthScreens/RootAuth";
import User from "./src/Screens/User/User";
import { FakeDataUserType, fakeDataUser } from "./src/app/FakeDataUser";

type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsHome = NativeStackScreenProps<RootStackParamList, "Home", "MyStack">;
type PropsProfile = NativeStackScreenProps<
  RootStackParamList,
  "Profile",
  "MyStack"
>;

function HomeScreen({ navigation }: PropsHome) {
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
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile", { name: "Roman" })}
      />
    </View>
  );
}

type ItemProps = {
  user: FakeDataUserType;
  onPress: () => void;
};

const Item = ({ user, onPress }: ItemProps) => (
  <View>
    <TouchableOpacity onPress={onPress}>
      {user.avatar && (
        <Text>
          <img src={user.avatar} alt="ava" />
        </Text>
      )}
      <Text>
        {user.firstName} {user.lastName}
      </Text>
    </TouchableOpacity>
  </View>
);

function ProfileScreen({ route, navigation }: PropsProfile) {
  const { name } = route.params;
  const [dataUser, setDataUser] = useState<FakeDataUserType[]>(fakeDataUser);
  const insets = useSafeAreaInsets();

  const onNavigateUser = (user: FakeDataUserType) => {
    navigation.navigate("User", { user });
  };

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
      <Text>Profile Screen</Text>
      {dataUser && (
        <FlatList
          data={dataUser}
          renderItem={({ item }) => (
            <Item user={item} onPress={() => onNavigateUser(item)} />
          )}
          keyExtractor={(item) => "" + item.id}
        />
      )}

      <Text>My name: {JSON.stringify(name)}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

// const Stack = createNativeStackNavigator<RootStackParamList>();
export const Stack = createBottomTabNavigator<RootStackParamList>();
// const Stack = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            initialParams={{ name: "Batman" }}
          />
          <Stack.Screen name="User" component={User} />
          {/* <Stack.Screen
            name="Auth"
            component={RootAuth}
            options={{ headerShown: false }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// export default function App() {
//   const [value, setValue] = useState("");
//   const [show, setShow] = useState(0);
//   const [tasks, setTasks] = useState<Task[]>([
//     { id: 1, title: "HTML", isDone: true },
//     { id: 2, title: "CSS", isDone: true },
//     { id: 3, title: "JS", isDone: false },
//     { id: 4, title: "React", isDone: true },
//     { id: 5, title: "React-native", isDone: false },
//   ]);

//   const addTask = () => {
//     const task: Task = { id: tasks.length + 1, title: value, isDone: false };
//     setTasks([...tasks, task]);
//     setValue("");
//   };
//   const deleteTask = (id: number) => {
//     setTasks(tasks.filter((t) => t.id !== id));
//   };
//   const changeCheckBox = (id: number) => {
//     setTasks(tasks.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
//   };
//   const changeShow = (id: number) => {
//     setShow(id);
//   };
//   const changeTitle = (id: number, title: string) => {
//     setTasks(tasks.map((t) => (t.id === id ? { ...t, title } : t)));
//     setShow(0);
//   };

//   return (
//     <Provider store={store}>
//       <View style={styles.container}>
//         <Main />
//       </View>
//     </Provider>
//   );
// }

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
