import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCookie } from '../../shared/cookies';
import api from '../../axios/api';
import { __getFloors } from './floorsSlice';

const initialState = {
  spaces: [],
  isLoading: false,
  isError: null,
};

//space 전체 조회
export const __getSpaces = createAsyncThunk(
  'getSpaces',
  async (payload, thunk) => {
    try {
      const token = getCookie('token');
      // const token = getCookie('refresh_token');
      const companyName = getCookie('companyName');
      const response = await api.get(`/spaces/${companyName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return thunk.fulfillWithValue(response.data.data);
    } catch (error) {
      return error;
    }
  },
);

// space 추가
export const __addSpace = createAsyncThunk(
  'addSpace',
  async (payload, thunk) => {
    try {
      const token = getCookie('token');
      const companyName = getCookie('companyName');
      const response = await api.post(
        `/spaces/${companyName}`,
        {
          spaceName: payload.spaceName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      thunk.dispatch(__getSpaces());
      return thunk.fulfillWithValue(response.data.data);
    } catch (error) {
      return error;
    }
  },
);

// floor 안에 space 추가
export const __addInnerSpace = createAsyncThunk(
  'addInnerSpace',
  async (payload, thunk) => {
    try {
      const token = getCookie('token');
      const companyName = getCookie('companyName');
      const response = await api.post(
        `/spaces/${companyName}/${payload.floorId}`,
        {
          spaceName: payload.spaceName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      thunk.dispatch(__getFloors());
      thunk.dispatch(__getSpaces());
      return thunk.fulfillWithValue(response.data.data);
    } catch (error) {
      return error;
    }
  },
);

export const spacesSlice = createSlice({
  name: 'spaces',
  initialState,
  reducers: {},
  extraReducers: {
    [__getSpaces.pending]: state => {
      state.isLoading = true;
    },
    [__getSpaces.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.spaces = action.payload;
    },
    [__getSpaces.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default spacesSlice.reducer;
