/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, {
  createContext,
  Dispatch,
  useEffect,
  useMemo,
  useReducer,
} from "react";

export const AppContext = createContext({
  state: {
    network: {
      chainId: 0,
      name: "",
      networkId: 0,
      rpcUrl: "",
      syncing: false,
    },
  },
  dispatch: (() => {}) as Dispatch<{
    type: string;
    data: any;
  }>,
  getProfile: (async () => {}) as (
    newToken?: string | undefined
  ) => Promise<void>,
  logout: async () => {},
  loginOauth: (async () => {}) as (idToken: string) => Promise<void>,
});

export const AppProvider: React.FC = ({ children }) => {
  const reducer = (state: any, action: { type: string; data: any }) =>
    action.type.slice(0, 4) === "set_"
      ? {
          ...state,
          [action.type.replace("set_", "")]: action.data,
        }
      : state;

  const [state, dispatch] = useReducer(reducer, {
    chainId: 0,
    name: "",
    networkId: 0,
    rpcUrl: "",
    syncing: false,
  });

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
