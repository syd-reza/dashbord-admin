import { useTheme, Stack, Container, TextField, Button, Typography, Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';


export default function Faq() {

    const theme = useTheme()
    const hashtag = [
        { id: 1, titel: "Verify Account" },
        { id: 2, titel: "Change Email" },
        { id: 3, titel: "Forget Password" },
        { id: 4, titel: "Payment Problems" },
        { id: 5, titel: "How To Trade" },
    ]
    const qusation = [
        {id:1, titel:"How to Complete Identity Verification For a Personal Account?", dec:"You can access the identity verification from [Account] - [Identification], or click [Verify] / [Get verified] from the homepage banners. You can check your current verification level on the page, which determines the trading limit of your account. To increase your limit, please complete the respective identity verification level."},
        {id:2, titel:"How to complete identity verification for a personal account on the pmusdt website?", dec:"You can access the identity verification from [Account] - [Identification], or click [Verify] / [Get verified] from the homepage banners. You can check your current verification level on the page, which determines the trading limit of your account. To increase your limit, please complete the respective identity verification level."},
        {id:3, titel:"How to complete identity verification for a personal account on the pmusdt website?", dec:"You can access the identity verification from [Account] - [Identification], or click [Verify] / [Get verified] from the homepage banners. You can check your current verification level on the page, which determines the trading limit of your account. To increase your limit, please complete the respective identity verification level."},
        {id:4, titel:"How to complete identity verification for a personal account on the pmusdt website?", dec:"You can access the identity verification from [Account] - [Identification], or click [Verify] / [Get verified] from the homepage banners. You can check your current verification level on the page, which determines the trading limit of your account. To increase your limit, please complete the respective identity verification level."},
        {id:5, titel:"How to complete identity verification for a personal account on the pmusdt website?", dec:"You can access the identity verification from [Account] - [Identification], or click [Verify] / [Get verified] from the homepage banners. You can check your current verification level on the page, which determines the trading limit of your account. To increase your limit, please complete the respective identity verification level."},
        {id:6, titel:"How to complete identity verification for a personal account on the pmusdt website?", dec:"You can access the identity verification from [Account] - [Identification], or click [Verify] / [Get verified] from the homepage banners. You can check your current verification level on the page, which determines the trading limit of your account. To increase your limit, please complete the respective identity verification level."},
        {id:7, titel:"How to complete identity verification for a personal account on the pmusdt website?", dec:"You can access the identity verification from [Account] - [Identification], or click [Verify] / [Get verified] from the homepage banners. You can check your current verification level on the page, which determines the trading limit of your account. To increase your limit, please complete the respective identity verification level."},
        {id:8, titel:"How to complete identity verification for a personal account on the pmusdt website?", dec:"You can access the identity verification from [Account] - [Identification], or click [Verify] / [Get verified] from the homepage banners. You can check your current verification level on the page, which determines the trading limit of your account. To increase your limit, please complete the respective identity verification level."},

    ]

    return (
        <Container>
            <Box sx={{ marginBottom: "56px" ,marginTop: "56px", padding: "64px 96px", backgroundColor: theme.palette.secondary.main, borderRadius: "30px" }}>
                <Typography component="h2" textAlign="center" fontSize="48px" fontWeight="700" lineHeight="77px" sx={{ background: "linear-gradient(to right, #1D8D94 0%, #91D2A3 10%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>Help Center</Typography>
                <Stack direction="row" gap="20px" sx={{ marginTop: "39px", marginBottom: "30px" }}>
                    <Box display="flex" alignItems="center" px="20px" borderRadius={theme.shape.borderRadius} sx={{ width: '100%', backgroundColor: theme.palette.primary.main }}>
                        <SearchOutlinedIcon />
                        <TextField fullWidth placeholder="Find Your Desired Question" variant="outlined" sx={{ m: 0, "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" }, "&:hover fieldset": { border: "none" } } }} />
                    </Box>
                    <Button sx={{ fontSize: "18px", padding: '19px 48px' }}>Search</Button>
                </Stack>
                <Stack direction="row" gap="20px" justifyContent="space-between">
                    {hashtag.map((item) => (
                        <Box sx={{ border: "1px solid #596B89", cursor: 'pointer', borderRadius: "8px", padding: "18px 20px", color: '#596B89', fontSize: '16px' }}># {item.titel}</Box>
                    ))}
                </Stack>
            </Box>
            {qusation.map((item) => (
                <Accordion sx={{padding:"26px 28px 26px 41px", border:"1px solid #2E3E59", borderRadius:"30px", marginBottom:"26px"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"#fff"}}/>} aria-controls="panel1-content">
                    <Stack direction="row" alignItems="center" gap="10px">
                        <PlayArrowRoundedIcon fontSize='medium'/>
                        <Typography component="span" fontSize="18px" fontWeight="700">{item.titel}</Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails sx={{color:theme.palette.text.secondary , fontWeight:"700", lineHeight:'32px'}}>
                    {item.dec}
                </AccordionDetails>
            </Accordion>
            ))}
        </Container>
    )
}
