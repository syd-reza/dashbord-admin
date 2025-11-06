import React, { useState } from 'react'
import { useTheme, Pagination, TextField, Typography, Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

export default function Dashbord() {

    const theme = useTheme()
    const pageSize = 7;
    const [page, setPage] = useState(1);
    const columns: GridColDef[] = [
        {
            field: 'from',
            headerName: 'From',
            headerClassName: 'super-app-theme--header',
            width: 130,
            flex: 1,
            editable: false,
            renderCell: (params: GridRenderCellParams<any, string>) => {
                const value = params.value;

                const icons: Record<string, string> = {
                    USDT: '/usdt.svg',
                };

                return (
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px", marginTop:"10px", marginLeft:"10px" }}>
                        <img
                            src={icons[value as string]}
                            width="28"
                            height="28"
                            style={{ borderRadius: "50%" }}
                            alt={value}
                        />
                        <Typography fontSize="14px">{value}</Typography>
                    </Box>
                );
            }
        },
        {
            field: 'to',
            headerName: 'To',
            headerClassName: 'super-app-theme--header',
            width: 120,
            flex: 1,
            editable: false,
            renderCell: (params: GridRenderCellParams<any, string>) => {
                const value = params.value;

                const icons: Record<string, string> = {
                    PM: '/pm.svg'
                };

                return (
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px",marginTop:"10px" ,marginLeft:"20px"}}>
                        <img
                            src={icons[value as string]}
                            width="28"
                            height="28"
                            style={{ borderRadius: "50%" }}
                            alt={value}
                        />
                        <Typography fontSize="14px">{value}</Typography>
                    </Box>
                );
            }
        },
        {
            field: 'amount',
            headerName: 'Amount',
            headerClassName: 'super-app-theme--header',
            width: 105,
            flex: 1,
            editable: false,
        },
        {
            field: 'received',
            headerName: 'Received',
            headerClassName: 'super-app-theme--header',
            width: 100,
            flex: 1,
            editable: false,
        },
        {
            field: 'date',
            headerName: 'Date',
            headerClassName: 'super-app-theme--header',
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

                if (value === 'successful') {
                    color = '#40A578';
                    text = 'Successful';
                } else if (value === 'Unsuccessful') {
                    color = '#F66066';
                    text = 'unsuccessful';
                } else if (value === 'checking') {
                    color = '#F3AC76';
                    text = 'Checking';
                }

                return (
                    <Button sx={{ width: "90px", backgroundColor: color, boxShadow: "none", color: "#343434", fontSize: "12px", cursor: "auto", p: "5px 20px" }} size="small">
                        {text}
                    </Button>
                );
            }
        },
        {
            field: 'link',
            headerName: 'Link',
            headerClassName: 'super-app-theme--header',
            width: 100,
            flex: 1,
            editable: false,
        },
    ];

    const rows = [
        { id: 1, from: 'USDT', to: 'PM', amount: 1000, received: 1200, date: "25-02-2023", status: "successful", link: "See More" },
        { id: 2, from: 'USDT', to: 'PM', amount: 1000, received: 1200, date: "25-02-2023", status: "Unsuccessful", link: "See More" },
        { id: 3, from: 'USDT', to: 'PM', amount: 1000, received: 1200, date: "25-02-2023", status: "checking", link: "See More" },
        { id: 4, from: 'USDT', to: 'PM', amount: 1000, received: 1200, date: "25-02-2023", status: "successful", link: "See More" },
        { id: 5, from: 'USDT', to: 'PM', amount: 1000, received: 1200, date: "25-02-2023", status: "successful", link: "See More" },
        { id: 6, from: 'USDT', to: 'PM', amount: 1000, received: 1200, date: "25-02-2023", status: "successful", link: "See More" },
        { id: 7, from: 'USDT', to: 'PM', amount: 1000, received: 1200, date: "25-02-2023", status: "successful", link: "See More" },
        { id: 8, from: 'USDT', to: 'PM', amount: 1000, received: 1200, date: "25-02-2023", status: "successful", link: "See More" },
        { id: 9, from: 'USDT', to: 'PM', amount: 1000, received: 1200, date: "25-02-2023", status: "successful", link: "See More" },
        { id: 10, from: 'USDT', to: 'PM', amount: 1000, received: 1200, date: "25-02-2023", status: "successful", link: "See More" },
    ];

    const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Box sx={{ backgroundColor: theme.palette.secondary.main }} borderRadius="20px" py="20px" px="22px">
            <Box display="flex" alignItems="center" px="20px" borderRadius={theme.shape.borderRadius} sx={{ backgroundColor: theme.palette.primary.main }}>
                <img src="/searchicons.svg" alt="searchicon" />
                <TextField fullWidth placeholder="Search..." variant="outlined" sx={{ m: 0, "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" }, "&:hover fieldset": { border: "none" } } }} />
            </Box>
            <Box mt="41px" mb="22px">
                <Typography variant='h3' fontSize="24px">Latest Transactions</Typography>
            </Box>
            <Box sx={{ width: '100%' }}>
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
                    rows={rows.slice((page - 1) * pageSize, page * pageSize)}
                    columns={columns}
                    autoHeight
                    hideFooter
                    disableRowSelectionOnClick
                    disableColumnMenu
                    disableColumnSorting
                    disableColumnFilter
                />
                <Box display="flex" justifyContent="center" mt={2}>
                    <Pagination
                        count={Math.ceil(rows.length / pageSize)}
                        page={page}
                        onChange={handleChange}
                        siblingCount={1}
                        boundaryCount={0}
                        sx={{
                            "& .MuiPaginationItem-root.Mui-selected": {
                                backgroundColor: "#40A578",
                                boxShadow: "0px 4px 10px 0px #40A57880",
                                color: "#fff",
                            },
                            "& .MuiPaginationItem-root": {
                                border: "1px solid #313A4B",
                                color: theme.palette.text.secondary
                            },
                            "& .MuiPaginationItem-previousNext": {
                                display: "none",
                            },
                        }}
                    />
                </Box>
            </Box>

        </Box>
    )
}
