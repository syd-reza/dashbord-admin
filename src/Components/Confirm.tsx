import { useState } from 'react'
import { Box, Typography, FormLabel, TextField, Stack, Button, useTheme, Checkbox, FormControlLabel } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';




export default function Confirm({ onNext }: any) {

    const type = useSelector((state: RootState) => state.exchange.exchangeType);
    const theme = useTheme()
    const isLogin = useSelector((state: any) => state.auth.isLogin);
    function exchangehandler() {
        onNext()

    }
    const items = [
        "any change in exchange rate on the binance exchange gives us the right to recalculate the amount of the application.",
        "the rate for your application will be fixed after 1 confirmation online.",
        "funds are credited after 20 transaction confirmations.",
        "we conduct AML checks in accordance with the AML policy of the flashobmen service.",
        "fill out all fields of the form provided.",
        "click the “make an exchange” button.",
        "read the terms of exchange. if you accept them, check the approprite boxes9. pay for the application according to the instructions on the website.",
    ];

    const [agree, setAgree] = useState(false);

    return (
        <Box sx={{ backgroundColor: theme.palette.secondary.main, padding: "30px 76px", borderRadius: "30px" }}>
            <Typography fontSize="24px" fontWeight="600" mb="43px">Invoice details :</Typography>
            {type === "USDT_TO_PM" ? (
                <Stack gap="16px" pb="34px" sx={{ borderBottom: "1px solid #596B89" }}>
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
                <Stack gap="16px" pb="34px" sx={{ borderBottom: "1px solid #596B89" }}>
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
            {!isLogin ? (
                <Box sx={{ display: "flex", flexDirection: "column", marginTop: "16px", backgroundColor: theme.palette.secondary.main, borderRadius: "30px" }}>
                    <FormLabel>Email :</FormLabel>
                    <TextField name='email' type='email' placeholder='Please Enter Your Email' />
                </Box>
            ) : (
                ""
            )}
            <Box py="37px">
                <Typography fontSize="20px" fontWeight="600" mb="31px">Exchange conditions:</Typography>
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

                <FormControlLabel
                    control={<Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} color="success" />}
                    label="i agree with the AML policy and user agreement." sx={{ color: "#fff" }} />
            </Box>
            <Stack direction="row" justifyContent="center" alignItems="center">
                <Button disabled={!agree} onClick={exchangehandler} sx={{ width: "560px" }}>
                    Make Exchange
                </Button>
            </Stack>
        </Box>
    )
}
