import React from 'react';
import styled from 'styled-components';

import ArticleIcon from '@mui/icons-material/Article';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RedeemIcon from '@mui/icons-material/Redeem';
import DirectionsBusFilledSharpIcon from '@mui/icons-material/DirectionsBusFilledSharp';
import LocalHospitalSharpIcon from '@mui/icons-material/LocalHospitalSharp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SellIcon from '@mui/icons-material/Sell';

import GoogleIcon from '@mui/icons-material/Google';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MoneyIcon from '@mui/icons-material/Money';

const Content = styled.div`
    font-size: 20px;
    /* max-width: 50px; */
    /* max-height: 50px; */
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export function getCategoryIcon(category) {
    if(category == 'Bills') {
        return (
            <Wrapper>
                <Content>
                    <ArticleIcon sx={{ fontSize: 40 }}/>
                </Content>
            </Wrapper>
        )
    } else if(category == 'Food and Dining') {
        return (
            <Wrapper>
                <Content>
                    <RestaurantIcon sx={{ fontSize: 40 }} />
                </Content>
            </Wrapper>
        )
    } else if(category == 'Shopping') {
        return (
            <Wrapper>
                <Content>
                    <ShoppingCartIcon sx={{ fontSize: 40 }} />
                </Content>
            </Wrapper>
        )
    } else if(category == 'Gifts and Donations') {
        return (
            <Wrapper>
                <Content>
                    <RedeemIcon sx={{ fontSize: 40 }} />
                </Content>
            </Wrapper>
        )
    } else if(category == 'Travelling') {
        return (
            <Wrapper>
                <Content>
                    <DirectionsBusFilledSharpIcon sx={{ fontSize: 40 }} />
                </Content>
            </Wrapper>
        )
    } else if(category == 'Medical') {
        return (
            <Wrapper>
                <Content>
                    <LocalHospitalSharpIcon sx={{ fontSize: 40 }} />
                </Content>
            </Wrapper>
        )
    } else if(category == 'Salary') {
        return (
            <Wrapper>
                <Content>
                    <AttachMoneyIcon sx={{ fontSize: 40 }} />
                </Content>
            </Wrapper>
        )
    } else if(category == 'Sold Items') {
        return (
            <Wrapper>
                <Content>
                    <SellIcon sx={{ fontSize: 40 }} />
                </Content>
            </Wrapper>
        )
    }
}


export function getMopIcon(mop) {
    if(mop == 'Cash') {
        return (
            <Wrapper>
                <Content>
                    <MoneyIcon sx={{ fontSize: 40 }}/>
                </Content>
            </Wrapper>
        )
    } else if(mop == 'Card') {
        return (
            <Wrapper>
                <Content>
                    <CreditCardIcon sx={{ fontSize: 40 }} />
                </Content>
            </Wrapper>
        )
    } else if(mop == 'UPI') {
        return (
            <Wrapper>
                <Content>
                    <GoogleIcon sx={{ fontSize: 40 }} />
                </Content>
            </Wrapper>
        )
    }
}