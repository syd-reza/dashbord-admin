import React, { useState } from 'react'
import { Container, FormLabel, TextareaAutosize, Typography, TextField, Box, useTheme, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as z from "zod";
import { toFormikValidationSchema } from 'zod-formik-adapter';

const schema = z.object({
    email: z.string({ error: "The Email Is Incorrect" }).min(1, { error: "Email Must Not Be Empty" }).email("The Email Is Incorrect"),
    subject: z.string({ error: "The subject is Incorrect" }).min(8, { error: "subject must be at Least 8 Characters Long" }),
});


export default function ContactUs() {

    const theme = useTheme()


    const form = useFormik({
        initialValues: { email: "", subject: "", message: "" },
        onSubmit: (values) => {
            console.log(values);
            form.resetForm();
        },

        validationSchema: toFormikValidationSchema(schema)
    })

    return (
        <Container sx={{ display: 'flex', justifyContent: "center" }}>
            <Box component="form" onSubmit={form.handleSubmit} mt="70px" py="34px" px="38px" sx={{ display: "flex", flexDirection: "column", width: "560px", height: "auto", backgroundColor: theme.palette.secondary.main, borderRadius: "30px" }}>
                <Typography fontSize="36px" fontWeight="bold" variant='h2' textAlign="left" sx={{ background: "linear-gradient(to right, #1D8D94 0%, #91D2A3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>Contact Us</Typography>
                <Typography fontSize="16px" fontWeight="bold" variant='h4' textAlign="left" sx={{ marginTop: "30px", marginBottom: "35px", color: theme.palette.text.secondary }}>Reach out and we will get in touch within 24 hours.</Typography>
                <FormLabel>Email :</FormLabel>
                <TextField name='email' value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} type='email' placeholder='Please Enter Your Email' error={form.touched.email && Boolean(form.errors.email)} helperText={form.touched.email && form.errors.email} />
                <FormLabel>Subject :</FormLabel>
                <TextField name='subject' value={form.values.subject} onChange={form.handleChange} onBlur={form.handleBlur} placeholder='Please Enter Your Subject' error={form.touched.subject && Boolean(form.errors.subject)} helperText={form.touched.subject && form.errors.subject} />
                <FormLabel>Message text :</FormLabel>
                <TextareaAutosize
                    value={form.values.message} onChange={form.handleChange} 
                    name='message'
                    minRows={8}
                    placeholder="Please Enter Your Massege"
                    className="custom-textarea"
                />
                <Button type='submit'>send</Button>
            </Box>
        </Container>
    )
}
