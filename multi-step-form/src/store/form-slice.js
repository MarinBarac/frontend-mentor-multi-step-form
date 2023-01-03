import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentStep: 1,
    formData: {
        name: '',
        email: '',
        phone: '',
        selectedPlan: 'Arcade',
        monthly: true,
        addOns: [
            {
                name: 'Online service',
                price: 1
            },
            {
                name: 'Large storage',
                price: 2
            }
        ],
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
        },
        addAddOn(state, action) {
            state.formData.addOns.push(action.payload.addOn);
        },
        removeAddOn(state, action) {
            const indexOfAddON = state.formData.addOns.findIndex(item => item.name === action.payload.name);
            state.formData.addOns.splice(indexOfAddON, 1);
        }
    }
});

export const formActions = formSlice.actions;

const formReducer = formSlice.reducer;

export default formReducer;