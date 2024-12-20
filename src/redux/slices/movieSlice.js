import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovie = createAsyncThunk('movie/fetchMovie', async (title) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?t=${title}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
  );
  return response.data;
});

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    data: null,
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;