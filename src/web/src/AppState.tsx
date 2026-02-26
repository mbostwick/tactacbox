import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type {} from '@redux-devtools/extension'
import {ActiveGame} from "./Game/Game";


export interface AppState {
    game: ActiveGame | null
    setGame: (givenGame: ActiveGame) => void
}
function getDefaultState(set:  {
    (partial: (AppState | Partial<AppState> | ((state: AppState) => (AppState | Partial<AppState>))), replace?: false): unknown
    (state: (AppState | ((state: AppState) => AppState)), replace: true): unknown
}): AppState{
    return {
        game: null,
        setGame: (givenGame) => set((state) => ({ game: givenGame })),
    }
}
export const useAppStore = create<AppState>()(
    devtools(
        persist(
            (set) => (getDefaultState(set)),
            {
                name: 'tac-storage',
            },
        ),
    ),
)
