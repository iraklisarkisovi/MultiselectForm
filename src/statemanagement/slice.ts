import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";


type inititaltype = {
  Status: [{
    Stat: boolean;
    id: number;
    Name: string
  }];
  PresonalInf: {
    name: string;
    email: string;
    phonenumber: string;
  };
  Addon: number[],
  Plan: { name: string; plan: string; paymentperiod: string}
};

const initialState: inititaltype = {
  Status: [
    {
      Stat: true,
      id: 1,
      Name: "",
    },
  ],
  PresonalInf: {
    name: "",
    email: "",
    phonenumber: "",
  },
  Addon: [],
  Plan: {
    name: "",
    plan: "", 
    paymentperiod: ""
  }
};

const ReduxSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    HandlePersonalInfo: (state, action) => {
      state.PresonalInf.name = action.payload.Name;
      state.PresonalInf.phonenumber = action.payload.PhoneNumber;
      state.PresonalInf.email = action.payload.EmailAdress;
    },
    HandleStatusChange: (state, action) => {
      state.Status = [action.payload];
    },
    HandleAddon: (state, action: PayloadAction<number[]>) => {
      state.Addon = action.payload;
    },
    HandlePlan: (
      state,
      action: PayloadAction<{ name: string; plan: string; paymentperiod: string}>
    ) => {
      state.Plan = action.payload;
    },
  },
});

export const redu = ReduxSlice.reducer
export const { HandlePersonalInfo, HandleAddon, HandlePlan, HandleStatusChange } = ReduxSlice.actions;

export const store = configureStore({
  reducer: {
    Stat: redu,
  },
});

export type RootState = ReturnType<typeof store.getState>;