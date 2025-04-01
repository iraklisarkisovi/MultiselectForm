import { configureStore, createSlice } from "@reduxjs/toolkit";


type inititaltype = {
  PresonalInf: {
    name: string;
    email: string;
    phonenumber: string;
  };
};

const initialState: inititaltype = {
  PresonalInf: {
    name: "",
    email: "",
    phonenumber: ""
  },

};

const ReduxSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        HandlePersonalInfo: (state, action) => {
            state.PresonalInf.name = action.payload.Name;
            state.PresonalInf.phonenumber = action.payload.PhoneNumber;
            state.PresonalInf.email = action.payload.EmailAdress;
        }   
    },
})

export const redu = ReduxSlice.reducer
export const { HandlePersonalInfo } = ReduxSlice.actions

export const store = configureStore({
  reducer: {
    Stat: redu,
  },
});

export type RootState = ReturnType<typeof store.getState>;