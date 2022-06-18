/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useMemo,
  useReducer,
} from 'react'

interface State {
  network: {
    chainId: number
    name: string
    networkId: number
    rpcUrl: string
    syncing: boolean
  }
}

interface Props extends State {
  dispatch: React.Dispatch<{
    type: string
    data: any
  }>
  getProfile: (newToken?: string | undefined) => Promise<void>
  logout: () => Promise<void>
  loginOauth: (idToken: string) => Promise<void>
}

export const AppContext = createContext<Props>({
  network: {
    chainId: 0,
    name: '',
    networkId: 0,
    rpcUrl: '',
    syncing: false,
  },
  dispatch: (() => {}) as Dispatch<{
    type: string
    data: any
  }>,
  getProfile: (async () => {}) as (
    newToken?: string | undefined,
  ) => Promise<void>,
  logout: async () => {},
  loginOauth: (async () => {}) as (idToken: string) => Promise<void>,
})

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const reducer = (state: any, action: { type: string; data: any }) =>
    action.type.slice(0, 4) === 'set_'
      ? {
          ...state,
          [action.type.replace('set_', '')]: action.data,
        }
      : state

  const [state, dispatch] = useReducer(reducer, {
    chainId: 0,
    name: '',
    networkId: 0,
    rpcUrl: '',
    syncing: false,
  })

  const value = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [state, dispatch],
  )
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
