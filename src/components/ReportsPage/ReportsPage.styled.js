import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 100px 100px;
    max-height: 100vw;


    .MuiDataGrid-root{
			border: 0px;
		}
		.MuiDataGrid-main{
			padding: 2px;
			font-size: 12px;
		}
		.MuiDataGrid-columnHeaders{
			font-size: 14px !important;
		}
		.MuiDataGrid-columnHeaderTitle {
			font-weight: 900;
		}
		.MuiDataGrid-cell{
			justify-content: center;
		}
		.MuiDataGrid-row{
			font-size: 12px;
			margin-top: 6px;
		}
`;