import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";


type inititaltype = {
  Ruler: {
    Status: boolean
    Adress: number
  },
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
  Addon: number[]
};

const initialState: inititaltype = {
  Ruler: {
    Status: false,
    Adress: 0,
  },
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
    HandleRuler: (state) => {
      state.Ruler.Status = !state.Ruler.Status;
    },
    HandleAddon: (state, action: PayloadAction<number[]>) => {
      state.Addon = action.payload;
    },
    HandleRulerAddress: (state, action) => {
      state.Ruler.Adress = action.payload;
    },
  },
});

export const redu = ReduxSlice.reducer
export const { HandlePersonalInfo, HandleAddon, HandleRulerAddress, HandleRuler, HandleStatusChange } = ReduxSlice.actions;

export const store = configureStore({
  reducer: {
    Stat: redu,
  },
});

export type RootState = ReturnType<typeof store.getState>;