import styled from 'styled-components';

export const Wrapper = styled.div`
    /* max-width: 750px; */
    /* height: 650px; */
    /* max-height: 650px; */
    display: flex;
	flex-direction: column;
	border-radius: 19px;
	border: 1px solid rgba(0,0,0,0.2);
	/* background-color: rgba(241, 196, 15); */
	box-shadow: 0 0 2px 0 rgba(15, 15, 15, 0.28);
	position: relative;
	/* overflow: hidden; */
	margin: 50px auto !important;
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
	padding: 50px;
	/* width: 100%; */
`;