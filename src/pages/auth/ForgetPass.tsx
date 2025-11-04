import { useState } from 'react'
import { Container, FormLabel, InputAdornment, IconButton, Typography, Stack, TextField, Box, useTheme, Button } from '@mui/material';
import { useFormik } from 'formik';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import * as z from "zod";
import { toFormikValidationSchema } from 'zod-formik-adapter';

const step1Schema = z.object({
    email: z.string({ error: "The Email Is Incorrect" }).min(1, { error: "Email Must Not Be Empty" }).email("The Email Is Incorrect"),
});

const step2Schema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters"), confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});


export default function ForgetPass() {

    const theme = useTheme()
    const [step, setstep] = useState(1)
    const [showPassword, setshowPassword] = useState(false)
    const [showPassword2, setshowPassword2] = useState(false)

    const validationSchema = step === 1
        ? toFormikValidationSchema(step1Schema)
        : toFormikValidationSchema(step2Schema);

    const form = useFormik({
        initialValues: { email: "", password: "", confirmPassword: "" },
        validationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            if (step === 1) {
                setstep(2)
            }else{
                console.log("Password changed successfully!");
            }
        },

    })

    const inputClearHandler = () => {
        form.setFieldValue("email", "");
    };

    const inputPasswordhandler = () => {
        setshowPassword(prev => !prev);
    }
    const inputPasswordhandler2 = () => {
        setshowPassword2(prev => !prev);
    }

    return (
        <Container sx={{ display: 'flex', justifyContent: "center" }}>
            {step === 1 ? (
                <Box component="form" onSubmit={form.handleSubmit} mb="130px" mt="224px" py="34px" px="38px" sx={{ display: "flex", flexDirection: "column", width: "560px", height: "auto", backgroundColor: theme.palette.secondary.main, borderRadius: "30px" }}>
                    <Typography fontSize="36px" fontWeight="bold" mb={6} variant='h2' textAlign="center" sx={{ background: "linear-gradient(to right, #1D8D94 0%, #91D2A3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>Forget Password</Typography>
                    <FormLabel>Email :</FormLabel>
                    <TextField name='email' value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} type='email' placeholder='Please Enter Your Email' error={form.touched.email && Boolean(form.errors.email)} helperText={form.touched.email && form.errors.email}
                        InputProps={{
                            endAdornment: form.values.email && (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={inputClearHandler}
                                        size="small"
                                        sx={{ color: "#FF6B6B" }}>
                                        <CancelOutlinedIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button type='submit'>confirm</Button>
                </Box>
            ) : (
                <Box component="form" onSubmit={form.handleSubmit} mb="70px" mt="137px" py="44px" px="38px" sx={{ display: "flex", flexDirection: "column", width: "560px", height: "auto", backgroundColor: theme.palette.secondary.main, borderRadius: "30px" }}>
                    <Typography fontSize="36px" fontWeight="bold" variant='h2' mb={6} textAlign="center" sx={{ background: "linear-gradient(to right, #1D8D94 0%, #91D2A3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>Change Password</Typography>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <FormLabel>New Password :</FormLabel>
                        {form.touched.password && (
                            <Typography component="p" sx={{ color: form.values.password.length < 4 ? '#F66066' : form.values.password.length < 8 ? '#FF6600' : "#6EC207" }}>
                                {form.values.password.length < 4 ? 'Very Weak' : form.values.password.length < 8 ? "Weak" : "Strong!"}
                            </Typography>
                        )}

                    </Stack>
                    <TextField name='password' value={form.values.password} onChange={form.handleChange} onBlur={form.handleBlur} type={showPassword ? "text" : "password"} placeholder='Please Enter Your Password' error={Boolean(form.touched.password && form.errors.password)}
                        InputProps={{
                            endAdornment: form.values.password && (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={inputPasswordhandler}
                                        size="small"
                                        sx={{ color: theme.palette.text.secondary }}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <FormLabel>Repeat New Password :</FormLabel>
                    <TextField name='confirmPassword' value={form.values.confirmPassword} onChange={form.handleChange} onBlur={form.handleBlur} type={showPassword2 ? "text" : "password"} placeholder='Please Repeat Your Password' error={form.touched.confirmPassword && Boolean(form.errors.confirmPassword)} helperText={form.touched.confirmPassword && form.errors.confirmPassword}
                        InputProps={{
                            endAdornment: form.values.confirmPassword && (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={inputPasswordhandler2}
                                        size="small"
                                        sx={{ color: theme.palette.text.secondary }}>
                                        {showPassword2 ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button type='submit'>register</Button>
                </Box>
            )}
        </Container>
    )
}
