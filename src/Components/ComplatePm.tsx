import React, { useState } from 'react'
import { Box, Typography, TextField, Select, MenuItem, Stack, useTheme, FormLabel, Button } from "@mui/material";
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import Success from './Success';
import UnSuccess from './UnSuccess';
import Waiting from './Waiting';
import Timer from './Timer';

export default function ComplatePm() {

    const theme = useTheme()
    const [value, setValue] = useState("TRON");
    const type = useSelector((state: RootState) => state.exchange.exchangeType);
    const [showeunsucses, setshoweunsucses] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false);
    const [showwaitting, setshowwaitting] = useState(false);
    const [showeComplate, setshoweComplate] = useState(true)


    const successClick = () => {
        setShowSuccess(true)
        setshoweComplate(false)
    }
    const unsuccessClick = () => {
        setshoweunsucses(true)
        setshoweComplate(false)
    }
    const waittingClick = () => {
        setshowwaitting(true)
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
                        <Typography fontSize="24px" fontWeight="600">Transaction details :</Typography>
                        <Timer timedast={10} onFinish={handleTimerFinish}/>
                    </Stack>
                    {type === "USDT_TO_PM" ? (
                        <Stack gap="16px" marginTop="44px" pb="34px" sx={{ borderBottom: "1px solid #596B89" }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography fontSize="20px" color={theme.palette.text.secondary} fontWeight="700">Send :</Typography>
                                <Typography fontSize="20px" fontWeight="700">100 <img src="/usdt.svg" alt="coin" /> USDT</Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography fontSize="20px" color={theme.palette.text.secondary} fontWeight="700">Receive :</Typography>
                                <Typography fontSize="20px" fontWeight="700">120 <img src="/pm.svg" alt="coin" /> perfect money</Typography>
                            </Stack>
                        </Stack>
                    ) : (
                        <Stack gap="16px" marginTop="44px" pb="34px" sx={{ borderBottom: "1px solid #596B89" }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography fontSize="20px" color={theme.palette.text.secondary} fontWeight="700">Send :</Typography>
                                <Typography fontSize="20px" fontWeight="700">120 <img src="/pm.svg" alt="coin" /> perfect money</Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography fontSize="20px" color={theme.palette.text.secondary} fontWeight="700">Receive :</Typography>
                                <Typography fontSize="20px" fontWeight="700">100 <img src="/usdt.svg" alt="coin" /> USDT</Typography>
                            </Stack>
                        </Stack>
                    )}
                    <Stack mt="6px">
                        <FormLabel sx={{ color: "#ABABAB", fontWeight: "600", my: "16px" }}>Perfect Money Code :</FormLabel>
                        <Stack sx={{ backgroundColor: "#242C39", borderRadius: "10px" }}>
                            <TextField fullWidth placeholder='Please Enter Perfect Money Code ' sx={{ m: 0, "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" }, "&:hover fieldset": { border: "none" } } }} />
                        </Stack>
                        <FormLabel sx={{ color: "#ABABAB", fontWeight: "600", my: "16px" }}>Perfect Money Number :</FormLabel>
                        <Stack sx={{ backgroundColor: "#242C39", borderRadius: "10px" }}>
                            <TextField fullWidth placeholder='Please Enter Perfect Money Number ' sx={{ m: 0, "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" }, "&:hover fieldset": { border: "none" } } }} />
                        </Stack>
                        <FormLabel sx={{ color: "#ABABAB", fontWeight: "600", my: "16px" }}>Choose Network And Enter Tether Address :</FormLabel>
                        <Stack direction="row" sx={{ backgroundColor: "#242C39", borderRadius: "10px" }}>
                            <Select value={value} onChange={(e) => setValue(e.target.value)} sx={{ backgroundColor: theme.palette.success.main, width: "20%", "& .MuiSelect-icon": { color: "#fff" } }}>
                                <MenuItem value="TRON">
                                    TRON
                                </MenuItem>
                            </Select>
                            <TextField fullWidth placeholder='Please Enter Address' sx={{ m: 0, "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" }, "&:hover fieldset": { border: "none" } } }} />
                        </Stack>
                        <Button sx={{ margin: "0 auto", marginTop: "42px", width: "60%" }}>submit</Button>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" marginTop="20px">
                    <Button onClick={successClick}>
                            Success
                        </Button>
                        <Button onClick={unsuccessClick}>
                            Un Success
                        </Button>
                        <Button onClick={waittingClick}>
                            waitting
                        </Button>
                    </Stack>
                </Box>
            }
            {showSuccess && <Success />}
            {showeunsucses && <UnSuccess />}
            {showwaitting && <Waiting />}
            {isPaid && <UnSuccess/>}
        </>
    )
}
