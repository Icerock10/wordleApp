import * as Yup from 'yup';

export const validationSchema = Yup.object({
    name: Yup.string().matches(/^[A-Za-z0-9 ]+$/, "Only alphabets or numbers").required('This field is required').min(2).trim(),
    password: Yup.string().matches(/^\S+$/, 'Please remove spaces').min(6, 'The password is not safe enough').required('This field is required').trim()
});

export const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = 'This field is required';
    }
    if(!values.password) {
        errors.password = 'This field is required';
    }
    if(values.name !== values.userName) {
        errors.name = 'Your name is incorrect';
    }
    if(values.password !== values.userPassword) {
        errors.password = 'Your password is incorrect';
    }
    return errors;
}