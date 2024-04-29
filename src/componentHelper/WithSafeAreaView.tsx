import React, { FC, ReactNode } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type Props = {
  children: ReactNode;
};

export const WithSafeAreaView: FC<Props> = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      {children}
    </SafeAreaView>
  );
};
