import React from 'react';

import Transaction from '../Transaction';
import {Wrapper, Content} from './TransactionList.styles';

export default function TransactionList() {
    const trans = [
        {
            amount: 100,
            mop: 'UPI', 
            category: 'Food and Dining', 
            date: '21 Mar 22',
            description: 'Pizza'
        },{
            amount: 100,
            mop: 'UPI', 
            category: 'Food and Dining', 
            date: '21 Mar 22',
            description: 'Pizza'
        },{
            amount: 100,
            mop: 'UPI', 
            category: 'Food and Dining', 
            date: '21 Mar 22',
            description: 'Pizza'
        }
    ]
    return (
        <Wrapper>
            <Content>
                {
                    trans.map( t => (
                        <Transaction amount={t.amount} mop={t.mop} category={t.category} date={t.date} description={t.description} />
                    ))
                }
            </Content>
        </Wrapper>
    );
}