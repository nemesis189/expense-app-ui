import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 750px;
    height: 150px;
    display: flex;
	flex-direction: row;
	border-radius: 19px;
	background-color: rgba(241, 196, 15);
	box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
	position: relative;
	/* overflow: hidden; */
	margin: 50px auto !important;
	z-index: 10;
`;

export const Content = styled.div`
    display:flex;   
	padding: 30px;
	width: 100%;
    align-items: center;
    justify-items:center;

	.income {
		padding: 5px;
		display: flex;
		flex-direction: column;
		border-radius: 50px;
		box-shadow: 0 0 10px rgba(15, 15, 15, 0.28);
		background: green;
		text-align:left;
		color: white;

		
	}

	.expenditure {
		padding: 5px;
		display: flex;
		flex-direction: column;
		border-radius: 50px;
		box-shadow: 0 0 10px rgba(15, 15, 15, 0.28);
		background: red;
		text-align:left;
		color: white;
	}

	.arrow-icon {
		background: transparent;
		display:flex;
		align-self:center;
		margin-left: 10px;
		color: rgba(0,0,0,0.3);
		font-size: 80px;
	}
`;