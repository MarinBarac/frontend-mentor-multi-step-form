import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentStep: 1,
    formData: {
        name: '',
        email: '',
        phone: '',
        selectedPlan: 'Arcade',
        monthly: true,
        addOns: [],
    },
}

const formSlice = createSlice({
    name:'form',
    initialState: {...initialState},
    reducers: {
        setName(state, action) {
            state.formData.name = action.payload.name;
        },
        setEmail(state, action) {
            state.formData.email = action.payload.email;
        },
        setPhone(state, action) {
            state.formData.phone = action.payload.phone;
        },
        setSelectedPlan(state, action) {
            console.log(action);
            state.formData.selectedPlan = action.payload.selectedPlan;
        },
        toggleMonthly(state, action) {
            state.formData.monthly = !state.formData.monthly;
        },
        setAddOns(state, action) {
            state.formData.addOns = [...action.payload.addOns];
        }
    }
});

export const formActions = formSlice.actions;

const formReducer = formSlice.reducer;

export default formReducer;