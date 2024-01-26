import { createSlice } from "@reduxjs/toolkit";
 


const initialState = {
    mode: 'light',
    alert: null,
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
            
        },
        showAlert:(state, {payload})=>{
            state.alert = {
                msg:payload.msg,
                type:payload.type
            }      
        },
        hideAlert:(state) =>{    
                state.alert = null;   
        }
    }
})

export const {changeMode, showAlert, hideAlert} = dataSlice.actions;

export default dataSlice.reducer;