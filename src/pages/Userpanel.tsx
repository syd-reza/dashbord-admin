import { useState } from 'react'
import { Container, useTheme, Tab, Tabs, Box } from '@mui/material';
import Dashbord from '../Components/Dashbord';
import EditProfile from '../Components/EditProfile';
import Partnerprogram from '../Components/Partnerprogram';
import { useDispatch } from 'react-redux';
import { logout } from "../redux/authSlice";


export default function Userpanel() {

    const dispatch = useDispatch()

    const theme = useTheme()
    const [value, setvalue] = useState(0)
    const handleChange = (event: any, newValue: number) => {
        setvalue(newValue);
    };
    const handleExit = () => {
        dispatch(logout())
    }

    return (
        <Container sx={{ display: "flex", gap: "20px", marginTop: "58px" }}>
            <Tabs value={value} onChange={handleChange} orientation='vertical' sx={{ height: "fit-content", width: "27%", "& .MuiTabs-indicator": { display: "none" }, backgroundColor: theme.palette.secondary.main, padding: "20px 40px 35px 13px", borderRadius: "20px" }}>
                <Tab icon={<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 18.75V14.75C0.75 13.6454 1.64543 12.75 2.75 12.75H8.75M13.75 4.75C13.75 6.95914 11.9591 8.75 9.75 8.75C7.54086 8.75 5.75 6.95914 5.75 4.75C5.75 2.54086 7.54086 0.75 9.75 0.75C11.9591 0.75 13.75 2.54086 13.75 4.75ZM15.75 10.75C15.75 12.9591 13.9591 14.75 11.75 14.75C13.9591 14.75 15.75 16.5409 15.75 18.75C15.75 16.5409 17.5409 14.75 19.75 14.75C17.5409 14.75 15.75 12.9591 15.75 10.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                } iconPosition='start' label="Dashboard" sx={{ justifyContent: "start", color: theme.palette.text.secondary, fontSize: "16px", "&.Mui-selected": { color: "#fff", fontWeight: "bold" } }} />
                <Tab icon={<img src='/profileicons.svg' />} iconPosition='start' label="Profile" sx={{ justifyContent: "start", color: theme.palette.text.secondary, fontSize: "16px", "&.Mui-selected": { color: "#fff", fontWeight: "bold" } }} />
                <Tab icon={<img src='/patnericons.svg' />} iconPosition='start' label="Partner Program" sx={{ justifyContent: "start", color: theme.palette.text.secondary, fontSize: "16px", "&.Mui-selected": { color: "#fff", fontWeight: "bold" } }} />
                <Tab onClick={handleExit} icon={<img src='/exiticons.svg' />} iconPosition='start' label="Exit" sx={{ justifyContent: "start", color: theme.palette.text.secondary, fontSize: "16px", "&.Mui-selected": { color: "#fff", fontWeight: "bold" } }} />
            </Tabs>
            <Box width="73%">
                {value === 0 && <Dashbord />}
                {value === 1 && <EditProfile />}
                {value === 2 && <Partnerprogram />}
            </Box>
        </Container>
    )
}
