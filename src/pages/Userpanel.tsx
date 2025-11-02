import React,{useState} from 'react'
import { Container, useTheme,Tab,Tabs,Box } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Dashbord from '../Components/Dashbord';
import EditProfile from '../Components/EditProfile';
import Partnerprogram from '../Components/Partnerprogram';
import { useDispatch } from 'react-redux';
import { logout } from "../redux/authSlice";


export default function Userpanel() {

    const dispatch = useDispatch()

    const theme = useTheme()
    const[value , setvalue] = useState(0)
    const handleChange = (event:any, newValue:number) => {
        setvalue(newValue);
      };
      const handleExit = ()=>{
        dispatch(logout())
      }

    return (
        <Container sx={{display:"flex", gap:"20px", marginTop:"58px"}}>
            <Tabs value={value} onChange={handleChange} orientation='vertical' sx={{height: "fit-content",width:"27%","& .MuiTabs-indicator": { display: "none" }, backgroundColor:theme.palette.secondary.main, padding:"20px 40px 35px 13px", borderRadius:"20px"}}>
                <Tab icon={<HomeOutlinedIcon sx={{fontSize:"28px"}}/>} iconPosition='start' label="Dashboard" sx={{justifyContent:"start", color:theme.palette.text.secondary, fontSize:"16px", "&.Mui-selected":{color:"#fff", fontWeight:"bold"}}}/>
                <Tab icon={<AccountCircleOutlinedIcon sx={{fontSize:"28px"}}/>} iconPosition='start' label="Profile" sx={{justifyContent:"start", color:theme.palette.text.secondary, fontSize:"16px", "&.Mui-selected":{color:"#fff", fontWeight:"bold"}}}/>
                <Tab icon={<ManageAccountsOutlinedIcon sx={{fontSize:"28px"}}/>} iconPosition='start' label="Partner Program" sx={{justifyContent:"start", color:theme.palette.text.secondary, fontSize:"16px", "&.Mui-selected":{color:"#fff", fontWeight:"bold"}}}/>
                <Tab onClick={handleExit} icon={<LogoutOutlinedIcon sx={{fontSize:"28px"}}/>} iconPosition='start' label="Exit" sx={{justifyContent:"start", color:theme.palette.text.secondary, fontSize:"16px", "&.Mui-selected":{color:"#fff" ,fontWeight:"bold"}}}/>
            </Tabs>
            <Box width="73%">
                {value === 0 && <Dashbord/>}
                {value === 1 && <EditProfile/>}
                {value === 2 && <Partnerprogram/>}
            </Box>
        </Container>
    )
}
