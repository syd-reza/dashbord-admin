import { Container, Stack, Box, Link, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { fixedAdmin } from '../redux/authSlice';
import { useLocation } from "react-router-dom";

export default function Header() {
    const theme = useTheme();
    const isLogin = useSelector((state: any) => state.auth.isLogin);
    const location = useLocation();

    const menuItems = [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/aboutus" },
        { label: "Contact Us", path: "/contactus" },
        { label: "Blog", path: "/blog" },
        { label: "FAQ", path: "/faq" },
    ];

    return (
        <Container sx={{ marginTop: "36px" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box component="img" src="/logosite.png" alt="logo" sx={{ width: 232, height: 65 }}></Box>

                <Box sx={{ display: 'flex', alignItems: "center", gap: "35px" }}>
                    {menuItems.map(item => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Box key={item.path} sx={{ position: "relative" }}>
                                <Link href={item.path} color={theme.palette.text.primary} underline='none'>
                                    {item.label}
                                </Link>

                                {isActive && (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            left: -13,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            width: 8,
                                            height: 8,
                                            borderRadius: "50%",
                                            backgroundColor: "#40A578"
                                        }}
                                    />
                                )}
                            </Box>
                        )
                    })}
                </Box>

                <Box sx={{ display: "flex", justifyContent: 'end', alignItems: "center", gap: "16px", width: "232px" }}>
                    <Box component="img" src="/useroanel.svg" alt="logo"></Box>

                    {isLogin ? (
                        <Link href="/dashbord" color={theme.palette.text.primary} underline='none'>{fixedAdmin.name}</Link>
                    ) : (
                        <Link href="/auth/login" color={theme.palette.text.primary} underline='none'>Login / Register</Link>
                    )}
                </Box>
            </Stack>
        </Container>
    );
}
