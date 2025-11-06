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
        "Any Change In Exchange Rate On The Binance Exchange Gives Us The Right To Recalculate The Amount Of The Application.",
        "The Rate For Your Application Will Be Fixed After 1 Confirmation Online.",
        "Funds Are Credited After 20 Transaction Confirmations.",
        "We Conduct AML Checks In Accordance With The AML Policy Of The Flashobmen Service.",
        "Fill Out All Fields Of The Form Provided.",
        "Click The “Make An Exchange” Button.",
        "Read The Terms Of Exchange. If You Accept Them, Check The Approprite Boxes9. Pay For The Application According To The Instructions On The Website.",
    ];

    const [agree, setAgree] = useState(false);

    return (
        <Box sx={{ backgroundColor: theme.palette.secondary.main, padding: "30px 76px", borderRadius: "30px" }}>
            <Typography fontSize="24px" fontWeight="600" mb="43px">Invoice Details :</Typography>
            {type === "USDT_TO_PM" ? (
                <Stack gap="16px" pb="34px" sx={{ borderBottom: "1px solid #596B89" }}>
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
                <Stack gap="16px" pb="34px" sx={{ borderBottom: "1px solid #596B89" }}>
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
            {!isLogin ? (
                <Box sx={{ display: "flex", flexDirection: "column", marginTop: "16px", backgroundColor: theme.palette.secondary.main, borderRadius: "30px" }}>
                    <FormLabel>Email :</FormLabel>
                    <TextField name='email' type='email' placeholder='Please Enter Your Email' sx={{ "&:hover fieldset": { border: "none" } }} />
                </Box>
            ) : (
                ""
            )}
            <Box py="37px">
                <Typography fontSize="20px" fontWeight="600" mb="31px">Exchange Conditions:</Typography>
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
                    label={
                        <Typography sx={{ fontSize: '16px' }}>
                            I Agree With The{" "}
                            <a
                                href="/aboutus"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: "#60A7F8",
                                    textDecoration: "none",
                                    fontWeight: 500,
                                    fontSize: '16px'
                                }}
                            >
                                AML Policy
                            </a>{" "}
                            And{" "}
                            <a
                                href="/aboutus"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: "#60A7F8",
                                    textDecoration: "none",
                                    fontWeight: 500,
                                    fontSize: '16px'
                                }}
                            >
                                User Agreement
                            </a>
                            .
                        </Typography>
                    } />
            </Box>
            <Stack direction="row" justifyContent="center" alignItems="center">
                <Button disabled={!agree} onClick={exchangehandler} sx={{ width: "560px" }}>
                    Confirm
                </Button>
            </Stack>
        </Box>
    )
}
