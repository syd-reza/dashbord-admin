import React from 'react'
import { useTheme, Typography, TextField ,Stack, Box, Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import type { SnackbarCloseReason } from '@mui/material/Snackbar';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';



export default function Partnerprogram() {

    const theme = useTheme()
    const token = 'https://en.flashobmen.com/ref/acc0c4c8-c799-4216-a281-6d3d3c43a480'
    const [open, setOpen] = React.useState(false);
    const [modalOpen, setmodalOpen] = React.useState(false);
    const handleClick = () => {
        navigator.clipboard.writeText(token)
        setOpen(true);
    };

    const handleOpenModal = () => setmodalOpen(true)
    const handleCloseModal = () => setmodalOpen(false);

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const columns: GridColDef[] = [
        {
            field: 'amount',
            headerName: 'Amount',
            width: 130,
            flex: 1,
            editable: false,
            renderCell: (params: GridRenderCellParams<any, string>) => {
                const value = params.value;
                const icon = "/usdt.svg";

                return (
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px", marginLeft: "60px" }}>
                        <img
                            src={icon}
                            width="28"
                            height="28"
                            style={{ borderRadius: "50%" }}
                            alt="USDT"
                        />
                        <Typography fontSize="14px">{value}</Typography>
                    </Box>
                );
            }

        },
        {
            field: 'to',
            headerName: 'To',
            width: 120,
            flex: 1,
            editable: false,
        },
        {
            field: 'date',
            headerName: 'Date',
            width: 120,
            flex: 1,
            editable: false,
        },
        {
            field: 'status',
            headerName: 'Status',
            headerClassName: 'super-app-theme--header',
            width: 120,
            flex: 1,
            editable: false,
            renderCell: (params: GridRenderCellParams<any, string>) => {
                const value = params.value;

                let color: any = 'primary';
                let text: string | undefined = value;

                if (value === 'Done') {
                    color = '#40A578';
                    text = 'Done';
                } else if (value === 'Waiting') {
                    color = '#F3AC76';
                    text = 'Waiting';
                }
                return (
                    <Button sx={{ width: "90px", backgroundColor: color, boxShadow: "none", color: "#343434", fontSize: "12px", cursor: "auto", p: "5px 20px" }} size="small">
                        {text}
                    </Button>
                );
            }
        },
    ];

    const rows = [
        { id: 1, amount: '100', to: 'x09aa998ee454c456255daf3ac94908f1dcfb7033', date: "25-02-2023", status: "Done" },
        { id: 2, amount: '100', to: 'x09aa998ee454c456255daf3ac94908f1dcfb7033', date: "25-02-2023", status: "Waiting" },
        { id: 3, amount: '100', to: 'x09aa998ee454c456255daf3ac94908f1dcfb7033', date: "25-02-2023", status: "Done" },
        { id: 4, amount: '100', to: 'x09aa998ee454c456255daf3ac94908f1dcfb7033', date: "25-02-2023", status: "Done" },
    ];

    return (
        <Box component="form" py="50px" px="20px" sx={{ backgroundColor: theme.palette.secondary.main, borderRadius: "30px" }}>
            <Typography component="p" fontSize="16px" fontWeight="bold" color={theme.palette.text.secondary}>Your Affiliate Link :</Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="center" my="14px" borderRadius="10px" sx={{ backgroundColor: theme.palette.primary.main }}>
                <Typography sx={{ paddingLeft: "26px" }}>{token}</Typography>
                <Button onClick={handleClick} startIcon={<ContentCopyIcon />} sx={{ color: theme.palette.text.secondary, backgroundColor: "#353F50", boxShadow: "none", padding: "12px 21px" }}>copy</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                    message="Text Is Copy"
                />
            </Stack>
            <Stack direction="row" alignItems="center" gap="23px">
                <Stack direction="row" alignItems="center" gap="66px" justifyContent="space-between" sx={{ backgroundColor: theme.palette.primary.main, padding: "23px 26px", borderRadius: "10px" }}>
                    <Stack direction="row" gap="16px">
                        <Stack justifyContent="center" alignItems="center" sx={{ backgroundColor: "#40A578", borderRadius: "100px", width: "67px", height: "67px", boxShadow: "0px 4px 10px 0px #40A57880" }}>
                            <DiamondOutlinedIcon fontSize='large' />
                        </Stack>
                        <Stack justifyContent="space-between">
                            <Typography fontSize="18px" fontWeight="600">Your Wallet Balance</Typography>
                            <Typography color='#40A578' fontSize="24px" fontWeight="700">320 USDT</Typography>
                        </Stack>
                    </Stack>
                    <Button onClick={handleOpenModal} sx={{ backgroundColor: "#40A578", boxShadow: "none", padding: "15px 32px" }}>withdraw</Button>
                </Stack>
                <Stack direction="row" gap="19px" sx={{ backgroundColor: theme.palette.primary.main, padding: "23px 26px", borderRadius: "10px" }}>
                    <Stack justifyContent="center" alignItems="center" sx={{ backgroundColor: "#F05A7E", borderRadius: "100px", width: "67px", height: "67px" }}>
                        <PeopleAltOutlinedIcon fontSize='large' />
                    </Stack>
                    <Stack justifyContent="space-between">
                        <Typography fontSize="18px" fontWeight="600">Your Friends</Typography>
                        <Typography color='#F05A7E' fontSize="24px" fontWeight="700">32</Typography>
                    </Stack>
                </Stack>
                <Modal open={modalOpen} onClose={handleCloseModal}>
                    <Box sx={{width:"744px" ,padding:"40px 59px", borderRadius:"20px" ,backgroundColor:theme.palette.secondary.main ,position:"absolute", top: '50%',left: '50%',transform: 'translate(-50%, -50%)',}}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{paddingBottom:"36px", borderBottom:"1px solid #364153"}}>
                            <Typography component="span" fontSize="28px" fontWeight="600">withdraw</Typography>
                            <CloseIcon onClick={handleCloseModal} sx={{cursor:"pointer"}}/>
                        </Stack>
                        <Stack gap="26px" sx={{marginTop:"41px"}}>
                            <Typography component="p" fontSize="20px" color='#ABABAB' fontWeight="600">Your Wallet Address (Tether TRC20)</Typography>
                            <TextField fullWidth placeholder="Address" variant="outlined" sx={{ m: 0, "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" }, "&:hover fieldset": { border: "none" } } }} />
                            <Button>confirm</Button>
                        </Stack>
                    </Box>
                </Modal>
            </Stack>
            <Stack direction="row" sx={{ color: theme.palette.text.secondary, display: "flex", alignItems: "center", gap: "5px", marginTop: "11px", marginBottom: "44px", }}>
                <Typography variant="subtitle1" color="secondry">
                    get 10
                </Typography>
                <DiamondOutlinedIcon sx={{ color: "#40A578" }} />
                <Typography variant="subtitle1" color="secondry">
                    for each invited user
                </Typography>
            </Stack>
            <Typography component="p" fontSize="24px" fontWeight="bold" mb="22px">Your Impressions</Typography>
            <DataGrid
                sx={{
                    backgroundColor: theme.palette.background.default,
                    borderRadius: "10px",
                    border: "solid 1px #313A4B",
                    "& .MuiDataGrid-cell": {
                        borderTop: "solid 1px #313A4B",
                        textAlign: "center",
                    },
                    "& .MuiDataGrid-cellContent": {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        borderBottom: "1px solid #313A4B",
                        textAlign: "center",
                    },
                    "& .MuiDataGrid-columnHeaderTitleContainer": {
                        justifyContent: "center",
                    },
                    "& .MuiDataGrid-footerContainer": {
                        display: "none",
                        minHeight: 0,
                        height: 0,
                    },
                    "& .MuiDataGrid-columnSeparator": { display: "none" },
                    "& .MuiDataGrid-filler": { display: "none" },
                }}
                rows={rows}
                columns={columns}
                autoHeight
                hideFooter
                disableRowSelectionOnClick
                disableColumnMenu
                disableColumnSorting
                disableColumnFilter
            />
        </Box>
    )
}
