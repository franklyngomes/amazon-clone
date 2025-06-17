import { create } from 'zustand'

export const useStore = create((set) => ({
  token: "",
  user: {},
  updateToken: (token : string) => set(() => ({token: token})),
  updateUser: (user: any) => set(() => ({user : user}))
}))