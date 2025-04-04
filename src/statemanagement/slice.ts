import { configureStore, createSlice } from "@reduxjs/toolkit";


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
};

const initialState: inititaltype = {
  Status: [{
    Stat: true,
    id: 1,
    Name: ""
  }],
  PresonalInf: {
    name: "",
    email: "",
    phonenumber: "",
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
        },  
        HandleStatusChange: (state, action) => {
            state.Status = [action.payload]
        },
        HandleUserInputs: (state, action) => {
            if(action.payload.id === 1){ 
              
            }
        }
    },
})

export const redu = ReduxSlice.reducer
export const { HandlePersonalInfo, HandleStatusChange } = ReduxSlice.actions;

export const store = configureStore({
  reducer: {
    Stat: redu,
  },
});

export type RootState = ReturnType<typeof store.getState>;