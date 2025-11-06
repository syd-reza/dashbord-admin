import { useTheme, Stack, Container, Typography, Box } from '@mui/material';

export default function AboutUs() {

    const theme = useTheme()
    const mission = [
        {id:"1", titel:"Our Mission", dec:"Today, Pmusdt.Com Is The World’s Leading Blockchain Ecosystem, With A Product Suite That Includes The Largest Digital Asset Exchange. Our Mission Is To Be The Infrastructure Provider For Crypto In Tomorrow’s World."},
        {id:"2", titel:"Our Vision", dec:"Our Vision Is To Increase The Freedom Of Money Globally. We Believe That By Spreading This Freedom, We Can Significantly Improve Lives Around The World."},
        {id:"3", titel:"Our Values", dec:"Pmusdt.Com Core Values Guide Our Behavior, Decisions, And Action, Enabling Unified Collaboration Across Our Diverse, International Teams."},
    ]

    return (
        <Container>
            <Stack direction="row" alignItems="center" gap="40px" sx={{backgroundColor:theme.palette.secondary.main, borderRadius:"30px", marginTop:"78px", padding:"0px 25px 0px 55px"}}>
                <Stack>
                    <Typography component="h2" fontSize="48px" fontWeight="700" lineHeight="77px" sx={{ background: "linear-gradient(to right, #1D8D94 0%, #91D2A3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>We Are Here To Make Your Transaction Much Easier</Typography>
                    <Typography fontSize="18px" fontWeight="700" color={theme.palette.text.secondary} lineHeight="42px">At Pmusdt.Com, We Believe That Everyone Should Have The Freedom To Earn, Hold, Spend, Share And Give Their Money - No Matter Who You Are Or Where You Come From.</Typography>
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
