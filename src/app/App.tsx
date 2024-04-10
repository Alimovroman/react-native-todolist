import React from "react";
import "./App.css";
import { TodolistsList } from "../features/TodolistsList/TodolistsList";
import { useAppSelector } from "./store";
import { RequestStatusType } from "./app-reducer";
import { View } from "react-native";

export function Main() {
  const status = useAppSelector<RequestStatusType>((state) => state.app.status);
  return (
    <View style={{ flex: 1 }}>
      {/* <ErrorSnackbar /> */}
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        {status === "loading" && <LinearProgress />}
      </AppBar> */}
      <View style={{ flex: 1 }}>
        <TodolistsList />
      </View>
    </View>
  );
}
