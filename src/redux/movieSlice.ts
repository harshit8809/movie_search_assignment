import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
}

interface MovieState {
  shortlistedMovies: Movie[];
}

const initialState: MovieState = {
  shortlistedMovies: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addToShortlist: (state, action: PayloadAction<Movie>) => {
      state.shortlistedMovies.push(action.payload);
    },
    removeFromShortlist: (state, action: PayloadAction<string>) => {
      state.shortlistedMovies = state.shortlistedMovies.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },
  },
});

export const { addToShortlist, removeFromShortlist } = movieSlice.actions;
export default movieSlice.reducer;