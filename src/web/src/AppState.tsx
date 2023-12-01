import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type {} from '@redux-devtools/extension'
import {ActiveGame, NewGame} from "./Game/Game";

export interface AppState {
    game: ActiveGame | null
    setGame: (givenGame: ActiveGame) => void
}

export const useAppStore = create<AppState>()(
    devtools(
        persist(
            (set) => ({
                game: null,
                setGame: (givenGame) => set((state) => ({ game: givenGame })),
            }),
            {
                name: 'tac-storage',
            },
        ),
    ),
)