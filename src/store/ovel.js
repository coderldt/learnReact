import { createSlice } from '@reduxjs/toolkit'

const ovel = createSlice({
    name: 'ovel',
    initialState: {
        menuState: true,
        allScreenState: false,
    },
    reducers: {
        onMenuChange: (state) => {
            state.menuState = !state.menuState
        },
        onAllScreenState: (state) => {
            state.allScreenState = !state.allScreenState
        },
    }
})

export default ovel.reducer

export const { onMenuChange, onAllScreenState } = ovel.actions