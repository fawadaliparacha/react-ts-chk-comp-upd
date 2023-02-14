import { createSlice } from '@reduxjs/toolkit';
import * as AuthService from './auth.actions';

export const initialState = Object.freeze({
  status: 'idle',
  error: '',
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthStateError: (state) => {
      state.error = '';
    },
    clearAuthStateStatus: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AuthService.fetchApiKey.pending, (state) => {
      state.status = 'fetchCategoriesPending';
      state.error = '';
    });
    builder.addCase(AuthService.fetchApiKey.fulfilled, (state, { payload }) => {
      state.status = 'fetchCategoriesResolved';
      state.error = '';
    });
    builder.addCase(
      AuthService.fetchApiKey.rejected,
      (state, { payload }: { payload: any }) => {
        state.status = 'fetchCategoriesRejected';
      }
    );
  },
});

// export const { clearDealStateError, clearDealStateStatus } = dealSlice.actions;

export default authSlice.reducer;
