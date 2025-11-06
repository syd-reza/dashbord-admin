import { Box, Typography, Stack, useTheme } from "@mui/material";
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';

export default function Waiting() {

    const theme = useTheme()

    const successFields = [
        { id: 1, title: "Address:", value: "X09aa998ee454c456255daf3ac94908f1dcfb7033" },
        { id: 2, title: "Amount :", value: "100 USDT" }
    ];

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
            <Stack mt="28px" justifyContent="center" alignItems="center" gap="29px" >
                <Stack direction="row" gap="16px" alignItems="center" justifyContent="center" color="#FFAF00">
                    <img src="/waitingicons.svg"/>
                    <Typography component="h2" textAlign="center" fontSize="32px" fontWeight="600">Waiting ...</Typography>
                </Stack>
                <Typography fontSize="20px" color={theme.palette.text.secondary} fontWeight="700">Your Payment Was Successful And We Will Soon Pay The Amount Of 100 Tether To This Address :</Typography>
            </Stack>
            <Stack mt="37px" gap="18px">
                {successFields.map((item) => (
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography fontSize="20px" color={theme.palette.text.secondary} fontWeight="700">{item.title}</Typography>
                        <Box sx={{letterSpacing: "4px" , width:"75%" ,backgroundColor:theme.palette.primary.main , borderRadius:"10px", p:"18px 16px"}}>{item.value}</Box>
                    </Stack>
                ))}
            </Stack>
        </Box>
    )
}
