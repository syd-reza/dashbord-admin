import { useState } from 'react'
import { Container, FormLabel, InputAdornment, IconButton, Link, Typography, Stack, TextField, Box, useTheme, Button } from '@mui/material';
import { useFormik } from 'formik';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useDispatch} from "react-redux";
import { register } from "../../redux/authSlice";
import * as z from "zod";
import { toFormikValidationSchema } from 'zod-formik-adapter';

const schema = z.object({
    email: z.string({ error: "The Email Is Incorrect" }).min(1, { error: "Email Must Not Be Empty" }).email("The Email Is Incorrect"),
    password: z.string({ error: "Password must be at Least 8 Characters Long" }).min(1, { message: "Very weak" }).refine(val => val.length >= 8, { message: "Weak", }),
    name: z.string({ error: "Name must be at Least 8 Characters Long" }).min(8, { error: "Name must be at Least 8 Characters Long" }),
});


export default function Register() {

    const theme = useTheme()
    const [showPassword, setshowPassword] = useState(false)
    const dispatch = useDispatch()

    const form = useFormik({
        initialValues: { name: "", email: "", password: "" },
        onSubmit: (values) => {
            console.log(values);
            dispatch(register({name: values.name, email: values.email}))
        },

        validationSchema: toFormikValidationSchema(schema)
    })

    const inputClearHandler = () => {
        form.setFieldValue("email", "");
    };

    const inputCleaNamerHandler = () => {
        form.setFieldValue("name", "");
    };

    const inputPasswordhandler = () => {
        setshowPassword(prev => !prev);
    }

    return (
        <Container sx={{ display: 'flex', justifyContent: "center" }}>
            <Box component="form" onSubmit={form.handleSubmit} mt="137px" py="34px" px="38px" sx={{ display: "flex", flexDirection: "column", width: "560px", height: "auto", backgroundColor: theme.palette.secondary.main, borderRadius: "30px" }}>
                <Typography fontSize="36px" fontWeight="bold" variant='h2' textAlign="center" sx={{ background: "linear-gradient(to right, #1D8D94 0%, #91D2A3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>register</Typography>
                <FormLabel>Name :</FormLabel>
                <TextField name='name' value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} type="text" placeholder='Please Enter Your Name' error={form.touched.name && Boolean(form.errors.name)} helperText={form.touched.name && form.errors.name}
                    InputProps={{
                        endAdornment: form.values.email && (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={inputCleaNamerHandler}
                                    size="small"
                                    sx={{ color: "#FF6B6B" }}>
                                    <CancelOutlinedIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
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
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <FormLabel>Password :</FormLabel>
                    {form.touched.password && (
                        <Typography component="p" sx={{color:form.values.password.length<4 ? '#F66066' : form.values.password.length<8 ? '#FF6600' : "#6EC207"}}>
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
                <Button type='submit'>register</Button>
                <Typography mt="27px" fontWeight="bold" color={theme.palette.text.secondary} component='p' align='center'>Have An Account?
                    <Link href="/auth/login" sx={{ color: theme.palette.success.main }}> Login</Link>
                </Typography>
            </Box>
        </Container>
    )
}
