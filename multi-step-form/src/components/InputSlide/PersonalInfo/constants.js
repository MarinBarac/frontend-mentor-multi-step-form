import { formActions } from "../../../store/form-slice";

export const INPUTS = [
    {
        name: 'Name',
        field: 'name',
        placeHolder: 'e. g. Stephen King',
        action: formActions.setName
    },
    {
        name: 'Email Address',
        field: 'email',
        placeHolder: 'e. g. stephenking@lorem.com',
        action: formActions.setEmail
    },
    {
        name: 'Phone Number',
        field: 'phone',
        placeHolder: 'e. g. +1 234 567 890',
        action: formActions.setPhone
    }
]