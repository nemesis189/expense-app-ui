import React from 'react';
import styled from "styled-components";
import ArticleIcon from '@mui/icons-material/Article';

export const Wrapper = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 10px;
    /* background: grey; */
    border: solid 1px black;
	border-radius: 19px;
    background-color: white;

    h3, h5 {
        font-family: 'Rubik';
    }

    .rowSpacing {
        margin-top: 10px !important;
    }

`;

const CategoryIconWrapper = styled.div`
    background: green;
`;

// ---------------------------------------------------


export function TransactionCategoryIcon({category}) {
    var icon = null;
    if (category == 'Bills') {
        icon =  <ArticleIcon />
    }

    return (
        <CategoryIconWrapper>
            {icon}
        </CategoryIconWrapper>
    )
}