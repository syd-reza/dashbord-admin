import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Box, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

interface TimerProps {
    timedast: number;
    onFinish?: () => void; 
}

export default function Timer({ timedast, onFinish }: TimerProps) {

    
    const endTime = useMemo(() => {
        const now = new Date();
        now.setSeconds(now.getSeconds() + timedast);
        return now;
    }, [timedast]);

    const formatEndTime = (date: Date) => {
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${hours}:${minutes}`;
    };

    const renderTime = ({ remainingTime }: any) => {
        const minutes = String(Math.floor(remainingTime / 60)).padStart(2, "0");
        const seconds = String(remainingTime % 60).padStart(2, "0");

        return (
            <Box sx={{ textAlign: "center", color: "#fff" }}>
                <Typography fontWeight={700} fontSize="14px">Time For Payment</Typography>
                <Box sx={{ fontSize: 36, fontWeight: 700, color: "#40A578" }}>
                    {minutes} : {seconds}
                </Box>
                <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: 1, fontSize: 16, fontWeight: 700, color: "#fff" }}>
                    <NotificationsOutlinedIcon fontSize="small" sx={{ mr: 0.5 }}/>
                    {formatEndTime(endTime)}
                </Stack>
            </Box>
        );
    };

    return (
        <CountdownCircleTimer
            isPlaying
            duration={timedast}
            colors={["#40A578", "#40A578", "#40A578", "#40A578"]}
            colorsTime={[600, 400, 200, 0]}
            strokeWidth={3}
            size={200}
            trailColor="#414E63"
            onComplete={() => {
                onFinish?.();             
                return { shouldRepeat: false };
            }}
        >
            {renderTime}
        </CountdownCircleTimer>
    );
}
