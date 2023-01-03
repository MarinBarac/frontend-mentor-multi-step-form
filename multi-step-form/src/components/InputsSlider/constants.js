import FinishingUp from "../InputSlide/FinishingUp/FinishingUp";
import PersonalInfo from "../InputSlide/PersonalInfo/PersonalInfo";
import PickAddOns from "../InputSlide/PickAddOns/PickAddOns";
import SelectPlan from "../InputSlide/SelectPlan/SelectPlan";
import ThankYouIcon from "../../assets/icon-thank-you.svg";

export const INPUTS = [
    {
        id: 0,
        title: 'Personal info',
        description: 'Please provide your name, email address, and phone number.',
        class: '',
        jsxElement: <PersonalInfo />
    },
    {
        id: 1,
        title: 'Select your plan',
        description: 'You have the option of monthly or yearly billing.',
        class: '',
        jsxElement: <SelectPlan />
    },
    {
        id: 2,
        title: 'Pick add-ons',
        description: 'Add-ons help enhance your gaming experience.',
        class: '',
        jsxElement: <PickAddOns />
    },
    {
        id: 3,
        title: 'Finishing up',
        description: 'Double-check everything looks OK before confirming.',
        class: '',
        jsxElement: <FinishingUp />
    },
    {
        id: 4,
        icon: ThankYouIcon,
        title: 'Thank you!',
        description: 'Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.',
        class: 'centered',
        jsxElement: <></>
    }
]