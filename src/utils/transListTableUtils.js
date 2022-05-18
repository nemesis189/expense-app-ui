import React from 'react';

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

export function getCategoryIcon(category) {
    if(category == 'Bills') {
        return (
            <ArticleIcon />
        )
    } else if(category == 'Food and Dining') {
        return (
            <RestaurantIcon  />
        )
    } else if(category == 'Shopping') {
        return (
            <ShoppingCartIcon  />
        )
    } else if(category == 'Gifts and Donations') {
        return (
            <RedeemIcon  />
        )
    } else if(category == 'Travelling') {
        return (
            <DirectionsBusFilledSharpIcon  />
        )
    } else if(category == 'Medical') {
        return (
            <LocalHospitalSharpIcon  />
        )
    } else if(category == 'Salary') {
        return (
            <AttachMoneyIcon  />
        )
    } else if(category == 'Sold Items') {
        return (
            <SellIcon  />
        )
    }
}


export function getMopIcon(mop) {
    if(mop == 'Cash') {
        return (
            <MoneyIcon />
        )
    } else if(mop == 'Card') {
        return (
            <CreditCardIcon  />
        )
    } else if(mop == 'UPI') {
        return (
            <GoogleIcon  />
        )
    }
}