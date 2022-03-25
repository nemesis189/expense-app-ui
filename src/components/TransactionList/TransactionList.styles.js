import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 750px;
    height: 650px;
    max-height: 650px;
    display: flex;
	flex-direction: column;
	border-radius: 19px;
	background-color: rgba(241, 196, 15);
	box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
	position: relative;
	/* overflow: hidden; */
	margin: 100px auto !important;
	z-index: 10;
`;

export const Content = styled.div`
	padding: 50px;
	/* width: 100%; */
`;