import { createSlice } from '@reduxjs/toolkit'

interface typeState {
    count: number,
    title: string
}

const initialState: typeState = {
    count: 1,
    title: 'redux-toolkit'
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, { payload }) {
            state.count = state.count + payload.step;
        },
        decrement(state, { payload }) {
            console.log(payload)
            state.count -= payload.step
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export const asyncdecrement = (payload: any) => (dispatch: (arg0: { payload: any; type: string; }) => void) => {
    setTimeout(() => {
        dispatch(decrement(payload))
    }, 2000)
}

export default counterSlice.reducer