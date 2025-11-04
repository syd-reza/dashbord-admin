import { useState } from 'react'
import { Box, TextField, IconButton, Button, Divider, Select, MenuItem, Typography, Stack, useTheme } from "@mui/material";
import { useDispatch } from 'react-redux';
import { ExchangeType, setExchangeType } from '../redux/exchangeSlice';

export default function Exchange({ onNext }: any) {

    const theme = useTheme()
    const dispatch = useDispatch();

    const [from, setFrom] = useState({
        value: "1000",
        currency: "usdt",
    })

    const [to, setTo] = useState({
        value: "1000",
        currency: "pm",
    })

    function swapHandler() {
        const temp = { ...from }
        setFrom({ ...to })
        setTo(temp)
    }

    function exchangehandler() {
        const type =
            from.currency === "usdt" && to.currency === "pm"
                ? ExchangeType.USDT_TO_PM
                : ExchangeType.PM_TO_USDT;

        dispatch(setExchangeType(type));
        onNext();
    }


    return (
        <Box sx={{ width: "560px", margin: "0 auto" }}>

            <Stack sx={{ backgroundColor: theme.palette.secondary.main, padding: "40px 38px", borderRadius: "30px" }}>
                <Typography fontSize="16px" fontWeight="700" mb="22px">From :</Typography>
                <Stack direction="row" sx={{ backgroundColor: "#242C39", borderRadius: "10px" }}>

                    <TextField
                        fullWidth
                        value={from.value}
                        onChange={(e) => setFrom({ ...from, value: e.target.value })}
                        sx={{ m: 0, "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" }, "&:hover fieldset": { border: "none" } } }}
                    />
                    <Divider orientation="vertical" variant="middle" flexItem sx={{ backgroundColor: "#5B5F5E" }} />
                    <Select
                        value={from.currency}
                        onChange={(e) => setFrom({ ...from, currency: e.target.value })}
                        sx={{ width: "70%", color: "#979E9C", "& .MuiOutlinedInput-notchedOutline": { border: "none" }, "& .MuiSelect-iconOutlined": { fill: "#979E9C" } }}
                    >
                        <MenuItem value="usdt">
                            <Stack direction="row" alignItems="center" gap="10px">
                                <img src="/usdt.svg" width="22" height="22" />
                                <Typography>USDT (TRC20)</Typography>
                            </Stack>
                        </MenuItem>
                        <MenuItem value="pm">
                            <Stack direction="row" alignItems="center" gap="10px">
                                <img src="/pm.svg" width="22" height="22" />
                                PerfectMoney
                            </Stack>
                        </MenuItem>
                    </Select>
                </Stack>
                <Typography fontSize="14px" mt="14px" color={theme.palette.text.secondary}>Min : $100     Max: $4832</Typography>
            </Stack>

            <Stack direction="row" justifyContent="center">
                <Box onClick={swapHandler}
                    sx={{display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", borderRadius:"100%" ,marginTop: "-20px" ,width: "69px", height: "69px", backgroundColor: theme.palette.primary.main }}>
                    <img src="/aroowefigma.svg" alt="chnga-coins" />
                </Box>
            </Stack>

            <Stack sx={{ marginTop: "-20px", backgroundColor: theme.palette.secondary.main, padding: "40px 38px", borderRadius: "30px" }}>
                <Typography fontSize="16px" fontWeight="700" mb="22px">To :</Typography>
                <Stack direction="row" sx={{ backgroundColor: "#242C39", borderRadius: "10px" }}>

                    <TextField
                        fullWidth
                        value={to.value}
                        onChange={(e) => setTo({ ...to, value: e.target.value })}
                        sx={{ m: 0, "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" }, "&:hover fieldset": { border: "none" } } }}
                    />
                    <Divider orientation="vertical" variant="middle" flexItem sx={{ backgroundColor: "#5B5F5E" }} />
                    <Select
                        value={to.currency}
                        onChange={(e) => setTo({ ...to, currency: e.target.value })}
                        sx={{ width: "70%", color: "#979E9C", "& .MuiOutlinedInput-notchedOutline": { border: "none" }, "& .MuiSelect-iconOutlined": { fill: "#979E9C" }, border: "none" }}
                    >
                        <MenuItem value="pm">
                            <Stack direction="row" alignItems="center" gap="10px">
                                <img src="/pm.svg" width="22" height="22" />
                                PerfectMoney
                            </Stack>
                        </MenuItem>
                        <MenuItem value="usdt">
                        <Stack direction="row" alignItems="center" gap="10px">
                            <img src="/usdt.svg" width="22" height="22" />
                            USDT (TRC20)
                        </Stack>
                        </MenuItem>
                    </Select>
                </Stack>
                <Typography fontSize="14px" mt="14px" color={theme.palette.text.secondary}>Min : $100     Max: $4832</Typography>
            </Stack>

            <Button onClick={exchangehandler} sx={{ marginTop: "27px", width: "100%" }}>
                Make Exchange
            </Button>

        </Box>
    )
}
