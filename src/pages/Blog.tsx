import * as React from 'react';
import { Container, Box, Grid ,Button, Typography, useTheme } from '@mui/material';
export default function Blog() {

    const theme = useTheme()

    const allblogs = [
        { id: 1, titel: "Website Development", icone: "/earth.svg" },
        { id: 2, titel: "App Development", icone: "/mobile.svg" },
        { id: 3, titel: "Digital Marketing", icone: "/tride.svg" },
        { id: 4, titel: "Graphic Design", icone: "/gragick.svg" },
        { id: 5, titel: "Brand Identity", icone: "/brand.svg" },
        { id: 6, titel: "Search Engine Optimization", icone: "/seo.svg" },
    ]

    return (
        <Container>
            <Grid container justifyContent="space-between" gap="40px" marginTop="80px">
            {allblogs.map((item) => (
                <Box
                    sx={{
                        width: 300,
                        p: 3,
                        borderRadius: 3,
                        background: 'rgba(255,255,255,0.05)', // پس‌زمینه شفاف
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        color: '#fff'
                    }}
                >
                    <img src={item.icone} alt="icone" width="40px"/>

                    <Typography variant="h6" fontWeight="bold">
                        {item.titel}
                    </Typography>

                    <Typography variant="body2" color="rgba(255,255,255,0.7)">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                        luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </Typography>

                    <Button
                        sx={{
                            mt: 2,
                            background: "linear-gradient(to right, #1D8D94 0%, #91D2A3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                            color: '#fff',
                            textTransform: 'none',
                            borderRadius: 2,
                            '&:hover': {
                                opacity: 0.9
                            }
                        }}
                        fullWidth
                        variant="contained"
                    >
                        Learn More
                    </Button>
                </Box>
            ))}
            </Grid>
            
        </Container>
    );
}
