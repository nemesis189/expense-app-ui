import React from 'react';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import GoogleIcon from '@mui/icons-material/Google';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import {TransactionCategoryIcon} from './Transcation.styles';
import {Wrapper} from './Transcation.styles';

export default function Transaction({amount, mop, category, date, description}) {

    return (
        <Wrapper>
            <Grid container spacing={4}>
                <Grid item xs={2} md={2}>
                    <TransactionCategoryIcon category={category} />
                </Grid>
                <Grid item xs={10} md={10} className="rowSpacing">
                    <Grid container item  spacing={5}>
                        <Grid container item spacing={10}>
                            <Grid item xs={6} md={6} columnSpacing="8" >
                                <Typography  variant="h4" component="h4">
                                    {amount}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Typography  variant="h5" component="h5">
                                    {date}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item  spacing={5}>
                            <Grid item xs={6} md={6}>
                                <Typography  variant="h5" component="h5">
                                    {description}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Typography  variant="h5" component="h5">
                                    <GoogleIcon color="green"/>
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Wrapper>
    );
}

