import { Container, Typography, Box, useTheme } from '@mui/material';

export default function Footer() {
  const theme = useTheme()
  return (
    <Container sx={{paddingTop:"18px", marginTop:'100px' ,borderTop:"1px solid #2E3E59"}}>
      <Box sx={{display:"flex", justifyContent:"center"}}>
        <Typography component="p" color={theme.palette.text.secondary}>Copyright © 2024 Repayment. All Rights Reserved.</Typography>
      </Box>
    </Container>
  )
}
