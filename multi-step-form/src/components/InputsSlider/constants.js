import PersonalInfo from "../InputSlide/PersonalInfo/PersonalInfo";

export const INPUTS = [
    {
        id: 0,
        title: 'Personal info',
        description: 'Please provide your name, email address, and phone number.',
        jsxElement: <PersonalInfo />
    },
    {
        id: 1,
        title: 'Select your plan',
        description: 'You have the option of monthly or yearly billing.',
        jsxElement: <></>
    },
    {
        id: 2,
        title: 'Pick add-ons',
        description: 'Add-ons help enhance your gaming experience.',
        jsxElement: <></>
    },
    {
        id: 3,
        title: 'Finishing up',
        description: 'Double-check everything looks OK before confirming.',
        jsxElement: <></>
    }
]