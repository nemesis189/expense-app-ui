import styled from 'styled-components';

export const Wrapper = styled.div`
    /* max-width: 90%; */

	padding: 0 4rem;
    height: 90%;
    display: flex;
	flex-direction: column;
	position: block;
	z-index: 10;
	
	& .MuiDataGrid-columnHeaders {
		background-color: rgba(25,118,210,0.2);
		border-top-left-radius: 19px;
		border-top-right-radius: 19px;
	}
	
	.red{
		margin-top: 4px;
		border-radius: 10px;
		background-color: rgba(255, 0, 0, 0.4);
	}
	.green{
		margin-top: 4px;
		border-radius: 10px;
		background-color: rgba(0, 255, 0, 0.4);
	}
`;

export const Content = styled.div`
	border-radius: 19px;
	border: 1px solid rgba(0,0,0,0.2);
    height: 100%;
/* padding: 50px; */
	/* width: 100%; */
`;

export const IconContent = styled.div`
    font-size: 20px;

    @media (min-width: 750px){
        font-size: 14px;
    }
`;

export const IconWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;