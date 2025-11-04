import { Box ,Typography, Stack, useTheme, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";


export default function UnSuccess() {

    const theme = useTheme()
    const navigate = useNavigate()

    function redirecthome() {
        navigate("/")
    }

    return (
        <Box sx={{ backgroundColor: theme.palette.secondary.main, padding: "76px", borderRadius: "30px" }}>
            <Typography fontSize="24px" fontWeight="600">Transaction Details :</Typography>
            <Stack gap="16px" mt="81px" pb="34px" sx={{ borderBottom: "1px solid #596B89" }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography fontSize="20px" color={theme.palette.text.secondary} fontWeight="700">Send :</Typography>
                    <Typography sx={{display:"flex", alignItems:"center", gap:"10px"}} fontSize="20px" fontWeight="700">100 <img src="/usdt.svg" alt="coin" /> USDT</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography fontSize="20px" color={theme.palette.text.secondary} fontWeight="700">Receive :</Typography>
                    <Typography sx={{display:"flex", alignItems:"center", gap:"10px"}} fontSize="20px" fontWeight="700">120 <img src="/pm.svg" alt="coin" /> Perfect Money</Typography>
                </Stack>
            </Stack>
            <Stack mt="68px" justifyContent="center" alignItems="center" gap="29px" >
                <Stack direction="row" gap="16px" alignItems="center" justifyContent="center" color={theme.palette.error.main}>
                    <CloseIcon sx={{ fontSize: "41px" }} />
                    <Typography component="h2" textAlign="center" fontSize="32px" fontWeight="600">Your Payment Time Has Expired !</Typography>
                </Stack>
                <Typography fontSize="20px" color={theme.palette.text.secondary} fontWeight="700">Please Complete The Payment Process Again</Typography>
                <Button onClick={redirecthome} sx={{p:"18px 41px"}}>Try Again</Button>
            </Stack>
        </Box>
    )
}
