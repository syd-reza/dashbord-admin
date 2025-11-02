import React from 'react'
import { useTheme, Stack, Container, Typography, Box } from '@mui/material';

export default function AboutUs() {

    const theme = useTheme()
    const mission = [
        {id:"1", titel:"Our Mission", dec:"Today, pmusdt.com is the world’s leading blockchain ecosystem, with a product suite that includes the largest digital asset exchange. Our mission is to be the infrastructure provider for crypto in tomorrow’s world."},
        {id:"2", titel:"Our Vision", dec:"Our vision is to increase the freedom of money globally. We believe that by spreading this freedom, we can significantly improve lives around the world."},
        {id:"3", titel:"Our Values", dec:"pmusdt.com Core Values guide our behavior, decisions, and action, enabling unified collaboration across our diverse, international teams."},
    ]

    return (
        <Container>
            <Stack direction="row" alignItems="center" gap="40px" sx={{backgroundColor:theme.palette.secondary.main, borderRadius:"30px", marginTop:"78px", padding:"0px 25px 0px 55px"}}>
                <Stack>
                    <Typography component="h2" fontSize="48px" fontWeight="700" lineHeight="77px" sx={{ background: "linear-gradient(to right, #1D8D94 0%, #91D2A3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>We are here to make your transaction much easier</Typography>
                    <Typography fontSize="18px" fontWeight="700" color={theme.palette.text.secondary} lineHeight="42px">At pmusdt.com, we believe that everyone should have the freedom to earn, hold, spend, share and give their money - no matter who you are or where you come from.</Typography>
                </Stack>
                <Box sx={{backgroundColor:theme.palette.primary.main, marginTop: "-50px" ,transform:" translateY(80px)" ,borderRadius:"100%" , padding:"67px"}}>
                    <img src="/vectorabout.png" alt="aboutus-img" />
                </Box>
            </Stack>
            <Stack justifyContent="center" gap="5px" alignItems="center" sx={{position:"relative"}}>
                <Box sx={{position:"absolute",zIndex:"-1" ,width:"1px",backgroundColor:"#2E3E59", top:"0" , bottom:"0", transform:" translateX(-50%)", left:"50%"}}></Box>
                {mission.map((item) => (
                    <Box sx={{border:"1px solid #2E3E59", marginTop:"80px" ,backgroundColor:"#242C39" ,width:"657px" ,borderRadius:"30px", padding:"48px"}}>
                        <Typography fontSize="32px" fontWeight="700" lineHeight="96px">{item.titel}</Typography>
                        <Typography fontSize="18px" fontWeight="700" lineHeight="42px" color={theme.palette.text.secondary}>{item.dec}</Typography>
                    </Box>
                ))}
            </Stack>
        </Container>
    )
}
