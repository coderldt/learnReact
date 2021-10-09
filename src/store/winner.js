import { createSlice } from '@reduxjs/toolkit'

const winner = createSlice({
    name: 'winner',
    initialState: {
        value: ''
    },
    reducers: {
        setWinner: (state, actions) => {
            state.value = actions.payload
        },
        clearWinner: (state) => {
            state.value = ''
        }
    }
})

export default winner.reducer

export const { setWinner, clearWinner } = winner.actions