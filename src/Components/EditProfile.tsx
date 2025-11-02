import { useState } from 'react'
import { FormLabel, InputAdornment, IconButton, Typography, Stack, TextField, Box, useTheme, Button } from '@mui/material';
import { useFormik } from 'formik';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import * as z from "zod";
import { toFormikValidationSchema } from 'zod-formik-adapter';



const schema = z.object({
    email: z.string({ error: "The Email Is Incorrect" }).min(1, { error: "Email Must Not Be Empty" }).email("The Email Is Incorrect"),
    password: z.string({ error: "Password must be at Least 8 Characters Long" }).min(1, { message: "Very weak" }).refine(val => val.length >= 8, { message: "Weak", }),
    name: z.string({ error: "Name must be at Least 8 Characters Long" }).min(8, { error: "Name must be at Least 8 Characters Long" }),
});




export default function EditProfile() {


    const theme = useTheme()
    const [showPassword, setshowPassword] = useState(false)

    const form = useFormik({
        initialValues: { name: "", email: "", password: "" },
        onSubmit: (values) => {
            console.log(values);
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
        <Box component="form" onSubmit={form.handleSubmit} py="110px" px="184px" sx={{ display: "flex", flexDirection: "column", width: "100%", height: "auto", backgroundColor: theme.palette.secondary.main, borderRadius: "30px" }}>
            <Typography fontSize="24px" fontWeight="bold" variant='h4' textAlign="left" mb="54px">Edit profile</Typography>
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
            <Button type='submit' sx={{marginTop:"20px"}}>Confirm</Button>
        </Box>
    )
}
