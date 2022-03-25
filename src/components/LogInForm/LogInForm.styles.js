import styled from "styled-components";

export const BlobContainer = styled.div`
	margin-top: 100px;
	width: 100%;
	height: 100%;
	position: relative;
	bottom:0;
	
	.blob {
		position: absolute;
		top: 0;
		left: 0;
		fill: #023F92;
		width: 100vmax;
		z-index: -1;
		animation: move 150s ease-in-out infinite;
		transform-origin: 50% 50%;
	}

	
	@keyframes move {
		0%   { transform: scale(1)   translate(10px, -30px); }
		38%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
		40%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
		78%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
		80%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
		100% { transform: scale(1)   translate(10px, -30px); }
	}
`;

export const BoxContainer = styled.div`
	width: 576px;
	min-height: 650px;
	display: flex;
	flex-direction: column;
	border-radius: 19px;
	background-color: #fff;
	box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
	position: relative;
	overflow: hidden;
	margin: 100px auto !important;
	z-index: 10;
	
	`;

export const TopContainer = styled.div`
	width: 100%;
	height: 250px;
	display: flex;
	flex-direction: column;
	/* justify-content: flex-end; */
	padding: 0 1.8em;
	padding-bottom: 5em;
	`;

export const BackDrop = styled.div`
	width: 180%;
	height: 750px;
	position: absolute;
	display: flex;
	flex-direction: column;
	border-radius: 40%;
	transform: rotate(130deg);
	top: -600px;
	left: -170px;
	background: rgb(241, 196, 15);
	background: linear-gradient(
		58deg,
		rgba(241, 196, 15, 1) 20%,
		rgba(243, 172, 18, 1) 100%
		);
		`;

export const HeaderContainer = styled.div`
	width: 100%;
	margin-left: 50px;
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	font-family: 'Pacifico';
	text-align: left;
	font-weight: 300;
	`;

export const HeaderText = styled.h2`
	font-size: 60px;
	font-weight: 800;
	line-height: 1.24;
	color: #fff;
	z-index: 10;
	margin-top: 10px;
	`;

export const SubmitButton = styled.button`
	width: 50%;
	height: 50px;
	background: linear-gradient(to right, rgb(241, 196, 15) 50%, transparent 50%);
	background-size: 200%;
	background-position: right;
	border-radius: 20px;
	border: 2px solid rgb(241, 196, 15);
	color: rgb(241, 196, 15);
	margin: 2rem 1em;
	padding: 3px;
	font-size: 22px;
	font-weight: 800;
	/* font-family: 'Rubik'; */
	
	transition: all .3s ease-out;

	&:hover{
		text-decoration: none;
		/* background-color: rgb(241, 196, 15);  */
		color: white;
		background-position: left;
		cursor: pointer;
		/* animation: submitHover 0.6s; */
	}

`;

export const LoginLink = styled.a`
	font-size: 16px;
	font-weight: 700;
	color: rgb(241, 196, 15);
	text-decoration: none;
	margin: 20px auto !important;
`;