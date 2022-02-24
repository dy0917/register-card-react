import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IUser, IStudent } from 'Types';

type userState = {
    user: IUser
};

const initialState: userState = {
    user: {
        name: "Kingsley"
    }
}

export const fetchUserById = createAsyncThunk(
    'users/fetchUserById',
    async (userId: string) => {
        await setTimeout(() => { }, 5000);
        return {
            name: userId
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export const userReducer = userSlice.reducer