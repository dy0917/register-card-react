import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IUser, ICard } from 'Types';

type userState = {
    user: IUser
    card: ICard|any
};

const initialState: userState = {
    user: {
        name: "Kingsley"
    },
    card: undefined
}

export const fetchUserById = createAsyncThunk(
    'users/fetchUserById',
    async (userId: string) => {
      
        return {
            name: userId
        }
    }
)

export const addCard = createAsyncThunk(
    'users/addCard',
    async (card: ICard) => {
        console.log(card);
     
        return {
            card
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
        });
        builder.addCase(addCard.fulfilled, (state, action) => {
            state.card = action.payload
        })

    }
})

export const { setUser } = userSlice.actions

export const userReducer = userSlice.reducer