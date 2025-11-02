import React from 'react'
import { Box, Typography, Stack, useTheme } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

export default function Success() {

    const theme = useTheme()

    const successFields = [
        { id: 1, title: "E-voucher :", value: "2326564925" },
        { id: 2, title: "Activation code :", value: "9012037427092330" },
        { id: 3, title: "Amount :", value: "100 USDT" },
        { id: 4, title: "Time & Date :", value: "25-02-2023, 13:22:16" },
    ];


    return (
        <Box sx={{ backgroundColor: theme.palette.secondary.main, padding: "76px", borderRadius: "30px" }}>
            <Typography fontSize="24px" fontWeight="600">Transaction details :</Typography>
            <Stack gap="16px" mt="81px" pb="34px" sx={{ borderBottom: "1px solid #596B89" }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography fontSize="20px" color={theme.palette.text.secondary} fontWeight="700">Send :</Typography>
                    <Typography fontSize="20px" fontWeight="700">100 <img src="/usdt.svg" alt="coin" /> USDT</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography fontSize="20px" color={theme.palette.text.secondary} fontWeight="700">Receive :</Typography>
                    <Typography fontSize="20px" fontWeight="700">120 <img src="/pm.svg" alt="coin" /> perfect money</Typography>
                </Stack>
            </Stack>
            <Stack direction="row" gap="16px" mt="68px" alignItems="center" justifyContent="center" color="#40A578">
                <DoneIcon sx={{ fontSize: "41px" }} />
                <Typography component="h2" textAlign="center" fontSize="32px" fontWeight="600">Payment success !</Typography>
            </Stack>
            <Typography fontSize="19px" mt="28px" textAlign="center" color={theme.palette.text.secondary} fontWeight="700">The transaction was successfully completed and the amount of 100 Tether was deposited to this address</Typography>
            <Stack mt="30px" gap="18px">
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
