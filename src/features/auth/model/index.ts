import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IFormData {
    username: string | null
    photo: File | null
}

interface IInitialState {
    formData: IFormData
}

const initialState: IInitialState = {
    formData: {
        username: null,
        photo: null,
    },
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.formData.username = action.payload
        },
        setUserPhoto: (state, action: PayloadAction<File>) => {
            state.formData.photo = action.payload
        },
    },
})

export const { setUsername, setUserPhoto } = authSlice.actions
