import styled from 'styled-components';

export const LogoutButton = styled.div`
    .logout{
        /* position: absolute; */
        right: 0;
        margin-right: 50px;
        display:flex;
        align-self:center;
        margin-left: 10px;
        color: rgba(15, 15, 15, 1);
        font-size: 50px;

        &:hover{
            color:red;
        }
    }

    .addTransaction {
        /* position: absolute; */
        right: 0;
        margin-right: 100px;
        display:flex;
        align-self:center;
        margin-left: 10px;
        color: rgba(15, 15, 15, 1);
        font-size: 50px;

        &:hover{
            color: green;
        }
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
`;
