import { useState } from "react";
import { Box, Typography, Stack, Button, Snackbar, useTheme } from "@mui/material";
import { useSelector } from 'react-redux';
import type { SnackbarCloseReason } from '@mui/material/Snackbar';
import type { RootState } from '../redux/store';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Success() {

    const theme = useTheme()
    const [open, setOpen] = useState(false);
    const token = "f9798ecf9e9cc54dd819c8e1dc36588a6a7fe9d8e055d56ef6a9847139a4ed6c"
    const type = useSelector((state: RootState) => state.exchange.exchangeType);
    const successFieldstheter = [
        { id: 1, title: "E-Voucher :", value: "2326564925" },
        { id: 2, title: "Activation Code :", value: "9012037427092330" },
        { id: 3, title: "Amount :", value: "100 USDT" },
        { id: 4, title: "Time & Date :", value: "25-02-2023, 13:22:16" },
    ];
    const successFieldspm = [
        { id: 1, title: "Address :", value: "X09aa998ee454c456255daf3ac94908f1dcfb7033", copy:false },
        { id: 2, title: "Amount :", value: "100 USDT", copy:false },
        { id: 3, title: "Time & Date :", value: "25-02-2023, 13:22:16", copy:false },
        { id: 4, title: "Tx Id :", value: "f9798ecf9e9cc54dd819c8e1dc36588a6a7fe9d8e055d56ef6a9847139a4ed6c", copy:true },
    ];

    const handleClick = () => {
        navigator.clipboard.writeText(token)
        setOpen(true);
    };

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Box sx={{ backgroundColor: theme.palette.secondary.main, padding: "76px", borderRadius: "30px" }}>
            <Typography fontSize="24px" fontWeight="600">Transaction Details :</Typography>
            {type === "USDT_TO_PM" ? (
                <Stack gap="16px" marginTop="44px" pb="34px" sx={{ borderBottom: "1px solid #596B89" }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography fontSize="20px" color={theme.palette.text.secondary} fontWeight="700">Send :</Typography>
                        <Typography sx={{ display: "flex", alignItems: "center", gap: "10px" }} fontSize="20px" fontWeight="700">100 <img src="/usdt.svg" alt="coin" /> USDT</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography fontSize="20px" color={theme.palette.text.secondary} fontWeight="700">Receive :</Typography>
                        <Typography sx={{ display: "flex", alignItems: "center", gap: "10px" }} fontSize="20px" fontWeight="700">120 <img src="/pm.svg" alt="coin" /> Perfect Money</Typography>
                    </Stack>
                </Stack>
            ) : (
                <Stack gap="16px" marginTop="44px" pb="34px" sx={{ borderBottom: "1px solid #596B89" }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography fontSize="20px" color={theme.palette.text.secondary} fontWeight="700">Send :</Typography>
                        <Typography sx={{ display: "flex", alignItems: "center", gap: "10px" }} fontSize="20px" fontWeight="700">120 <img src="/pm.svg" alt="coin" /> Perfect Money</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography fontSize="20px" color={theme.palette.text.secondary} fontWeight="700">Receive :</Typography>
                        <Typography sx={{ display: "flex", alignItems: "center", gap: "10px" }} fontSize="20px" fontWeight="700">100 <img src="/usdt.svg" alt="coin" /> USDT</Typography>
                    </Stack>
                </Stack>
            )}
            <Stack direction="row" gap="16px" mt="68px" alignItems="center" justifyContent="center" color="#40A578">
                <img src="/tikicons.svg" alt="tikicone" />
                <Typography component="h2" textAlign="center" fontSize="32px" fontWeight="600">Payment Success !</Typography>
            </Stack>
            <Typography fontSize="18px" mt="28px" textAlign="center" color={theme.palette.text.secondary} fontWeight="700">The Transaction Was Successfully Completed And The Amount Of 100 Tether Was Deposited To This Address</Typography>
            <Stack mt="30px" gap="18px">
                {type === "USDT_TO_PM" ? (
                    successFieldstheter.map((item) => (
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography fontSize="20px" color={theme.palette.text.secondary} fontWeight="700">{item.title}</Typography>
                            <Box sx={{ width: "75%", backgroundColor: theme.palette.primary.main, borderRadius: "10px", p: "18px 16px" }}>
                                <Typography sx={{ letterSpacing: "4px" }}>
                                    {item.value}
                                </Typography>
                            </Box>
                        </Stack>
                    ))
                ) : (
                    successFieldspm.map((item) => (
                        <Stack direction="row" justifyContent="space-between" alignItems="center" gap="70px">
                            <Typography fontSize="20px" color={theme.palette.text.secondary} fontWeight="700">{item.title}</Typography>
                            <Stack direction="row" gap="77px" alignItems="center" justifyContent="space-between" sx={{ letterSpacing: "4px", width: "75%", backgroundColor: theme.palette.primary.main, borderRadius: "10px", p: "18px 16px" }}>
                                <Typography sx={{letterSpacing: "4px",wordBreak: "break-word",  overflowWrap: "anywhere", whiteSpace: "normal"}}>
                                    {item.value}
                                </Typography>
                                {item.copy && 
                                <Box onClick={handleClick} sx={{borderRadius:"8px", cursor:"pointer" ,color: theme.palette.text.secondary, backgroundColor: "#2A3342", boxShadow: "none", padding: "11px 14px" }}>
                                    <ContentCopyIcon />
                                </Box>}
                                <Snackbar
                                    open={open}
                                    autoHideDuration={2000}
                                    onClose={handleClose}
                                    message="Text Is Copy"
                                />
                            </Stack>
                        </Stack>
                    ))
                )}

            </Stack>
        </Box>
    )
}
