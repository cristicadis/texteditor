import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    mode: 'light',
}

const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
        changeMode:(state) => {
            if(state.mode=='light'){
                state.mode='dark';
            }  else {
                state.mode='light';
            }
            
        }
    }
})

export const {changeMode} = dataSlice.actions;

export default dataSlice.reducer;