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
                <Tab icon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.50988 18.5748C5.6673 16.3047 8.02709 14.75 10.75 14.75C13.4519 14.75 15.7962 16.2808 16.9631 18.5223M13.0833 9.1944C13.0833 10.5445 11.9889 11.6389 10.6389 11.6389C9.2889 11.6389 8.19444 10.5445 8.19444 9.1944C8.19444 7.84442 9.2889 6.75 10.6389 6.75C11.9889 6.75 13.0833 7.84442 13.0833 9.1944ZM10.75 20.75C5.22715 20.75 0.75 16.2728 0.75 10.75C0.75 5.22715 5.22715 0.75 10.75 0.75C16.2728 0.75 20.75 5.22715 20.75 10.75C20.75 16.2728 16.2728 20.75 10.75 20.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>} iconPosition='start' label="Profile" sx={{ justifyContent: "start", color: theme.palette.text.secondary, fontSize: "16px", "&.Mui-selected": { color: "#fff", fontWeight: "bold" } }} />
                <Tab icon={<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 18.75V14.75C0.75 13.6454 1.64543 12.75 2.75 12.75H8.75M13.75 4.75C13.75 6.95914 11.9591 8.75 9.75 8.75C7.54086 8.75 5.75 6.95914 5.75 4.75C5.75 2.54086 7.54086 0.75 9.75 0.75C11.9591 0.75 13.75 2.54086 13.75 4.75ZM15.75 10.75C15.75 12.9591 13.9591 14.75 11.75 14.75C13.9591 14.75 15.75 16.5409 15.75 18.75C15.75 16.5409 17.5409 14.75 19.75 14.75C17.5409 14.75 15.75 12.9591 15.75 10.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>} iconPosition='start' label="Partner Program" sx={{ justifyContent: "start", color: theme.palette.text.secondary, fontSize: "16px", "&.Mui-selected": { color: "#fff", fontWeight: "bold" } }} />
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
