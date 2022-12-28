import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentStep: 1,
    formData: {
        name: '',
        email: '',
        phone: '',
        selectedPlan: '',
        monthly: true,
        addOns: [],
    },
}

const formSlice = createSlice({
    name:'form',
    initialState: {...initialState},
    reducers: {
        setName(state, action) {
            state.formData.name = action.name;
        },
        setEmail(state, action) {
            state.formData.email = action.email;
        },
        setPhone(state, action) {
            state.formData.phone = action.phone;
        },
        setSelectedPlan(state, action) {
            state.formData.selectedPlan = action.selectedPlan;
        },
        setAddOns(state, action) {
            state.formData.addOns = [...action.addOns];
        }
    }
});

export const formActions = formSlice.actions;

const formReducer = formSlice.reducer;

export default formReducer;