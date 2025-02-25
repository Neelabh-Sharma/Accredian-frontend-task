// store.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://accredian-backend-task-n40d.onrender.com/api/referrals'

// Async action to send data to the backend
export const sendData = createAsyncThunk('data/sendData', async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post(url, formData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Something went wrong');
    }
});

// Slice
const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(sendData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(sendData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});
export default dataSlice.reducer;