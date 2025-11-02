import React from 'react';
import { Container, Stack, Box, Link, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { fixedAdmin } from '../redux/authSlice';

export default function Header() {
    const theme = useTheme()
    const isLogin = useSelector((state: any) => state.auth.isLogin);
    return (
        <Container sx={{marginTop:"36px"}}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box component="img" src="/logosite.png" alt="logo" sx={{ width: 232, height: 65 }}></Box>
                <Box sx={{display:'flex', alignItems:"center", gap:"35px"}}>
                    <Link href="/" color={theme.palette.text.primary} underline='none'>home</Link>
                    <Link href="/aboutus" color={theme.palette.text.primary} underline='none'>about us</Link>
                    <Link href="/contactus" color={theme.palette.text.primary} underline='none'>contact us</Link>
                    <Link href="/blog" color={theme.palette.text.primary} underline='none'>blog</Link>
                    <Link href="/faq" color={theme.palette.text.primary} underline='none'>FAQ</Link>
                </Box>
                <Box sx={{display:"flex",justifyContent:'end' , alignItems:"center", gap:"16px" , width:"232px"}}>
                    <Box component="img" src="/useroanel.svg" alt="logo"></Box>
                    {isLogin ? (
                        <Link href="/dashbord" color={theme.palette.text.primary} underline='none'>{fixedAdmin.name}</Link>
                    ):(
                        <Link href="/auth/login" color={theme.palette.text.primary} underline='none'>login  / register</Link>
                    )}
                </Box>
            </Stack>
        </Container>

    )
}
