import { useState } from 'react'
import { Box, Typography, TextField, Select, Button, MenuItem, Stack, useTheme, List, ListItem } from "@mui/material";
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import Success from './Success';
import UnSuccess from './UnSuccess';
import { QRCodeSVG } from 'qrcode.react';
import Timer from './Timer';


export default function ComplateTether() {


    const theme = useTheme()
    const type = useSelector((state: RootState) => state.exchange.exchangeType);
    const [value, setValue] = useState("TRON");
    const [showeunsucses, setshoweunsucses] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false);
    const [showeComplate, setshoweComplate] = useState(true)

    const items = [
        "Any change in exchange rate on the binance exchange gives us the right to recalculate the amount of the application.",
        "The rate for your application will be fixed after 1 confirmation online.",
        "Funds are credited after 20 transaction confirmations.",
    ];

    const successClick = () => {
        setShowSuccess(true)
        setshoweComplate(false)
    }
    const unsuccessClick = () => {
        setshoweunsucses(true)
        setshoweComplate(false)
    }

    const [isPaid, setIsPaid] = useState(false);
    const handleTimerFinish = () => {
        setIsPaid(true);
        setshoweComplate(false)
    };
    return (
        <>
            {showeComplate &&
                <Box sx={{ backgroundColor: theme.palette.secondary.main, padding: "30px 76px", borderRadius: "30px" }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography fontSize="24px" fontWeight="600">Transaction Details :</Typography>
                        <Timer timedast={100} onFinish={handleTimerFinish} />
                    </Stack>
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
                    <Stack direction="row" gap="60px" justifyContent="space-between" mt="56px">
                        <Stack justifyContent="space-between">
                            <Typography fontSize="20px" lineHeight="46px" color={theme.palette.text.secondary}>choose network and To receive 120 Perfect Money, please deposit 100 Tether to the Tether address below:</Typography>
                            <Stack direction="row" sx={{ backgroundColor: "#242C39", borderRadius: "10px" }}>
                                <Select value={value} onChange={(e) => setValue(e.target.value)} sx={{ backgroundColor: theme.palette.success.main, width: "20%", "& .MuiSelect-icon": { color: "#fff" } }}>
                                    <MenuItem value="TRON">
                                        TRON
                                    </MenuItem>
                                </Select>
                                <TextField fullWidth placeholder=' x09aa998ee454c456255daf3ac94908f1dcfb7033' sx={{ m: 0, "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" }, "&:hover fieldset": { border: "none" } } }} />
                            </Stack>
                        </Stack>
                        <Box>
                            <QRCodeSVG value="https://tailwindcss.com/docs/installation/using-vite" size={191} fgColor="#ABABAB" level="Q" bgColor="#2A3342" />
                        </Box>
                    </Stack>
                    <Box>
                        <Typography fontSize="20px" mt="54px" mb="30px" fontWeight="700">Exchange conditions:</Typography>
                        <List sx={{ display: "flex", flexDirection: "column", gap: "14px", "& .MuiListItem-root": { py: 0.2, px: 0, } }}>
                            {items.map((text, index) => (
                                <ListItem key={index} sx={{ display: "flex", alignItems: "flex-start", gap: "13px" }}>
                                    <Typography fontWeight="600" fontSize="14px" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "25px", width: "25px", backgroundColor: "#1D8D94", borderRadius: "100%" }}>
                                        {index + 1}
                                    </Typography>

                                    <Typography >{text}</Typography>
                                </ListItem>
                            ))}
                        </List>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" marginTop="20px">
                            <Button onClick={successClick}>
                                Success
                            </Button>
                            <Button onClick={unsuccessClick}>
                                Un Success
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            }
            {showSuccess && <Success />}
            {showeunsucses && <UnSuccess />}
            {isPaid && <UnSuccess />}
        </>
    )
}
