import styled from 'styled-components';

export const AddTransaction = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
	margin: 20px auto !important;
    align-items: center;
    justify-items: center;
	border-radius: 19px;
    
    .addTransaction{
        border-radius: 19px;
        /* position: absolute; */
        /* right: 0; */
        /* display:flex; */
        /* align-self:center; */
        /* margin-left: 10px; */
        color: rgba(15, 15, 15, 1);
        font-size: 50px;
        /* width: inherit; */
        width: 100%;
        &:hover{
            background-color: rgba(0, 127.5, 0, 1);
            color: white;
        }
    }
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    margin: auto 20px;
    padding-left: 50px;
    padding-right: 50px;
`;
