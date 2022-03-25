import React from 'react';
import Grid from '@mui/material/Grid';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import { Wrapper, Content } from './MonthlyIncomeExpense.styles';
import { createTheme, Typography, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: "Rubik",
        color: '#fff',
    },
})

export default function MonthlyIncomeExpense() {
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Content>
                    <Grid container spacing={10}>
                        <Grid item lg={6}>
                            <div className='income'>
                                <Grid container item spacing={2}>
                                    <Grid item>
                                        <ArrowCircleDownIcon  className="arrow-icon"/>
                                    </Grid>
                                    <Grid item>
                                        <Typography component="h5" variant="h5">
                                            Income
                                        </Typography>
                                        <Typography component="h3" variant="h3">
                                            1000
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item lg={6}>
                            <div className='expenditure'>
                                <Grid container item spacing={2}>
                                    <Grid item>
                                        <ArrowCircleUpIcon  className="arrow-icon"/>
                                    </Grid>
                                    <Grid item>
                                        <Typography component="h5" variant="h5">
                                            Expenditure
                                        </Typography>
                                        <Typography component="h3" variant="h3">
                                            1000
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Content>
            </Wrapper>
        </ThemeProvider>
    );
}