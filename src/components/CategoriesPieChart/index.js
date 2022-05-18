import React, { memo } from 'react';
import {PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import {Wrapper} from './CategoriesPieChart.styles';
import {useSelector, useDispatch } from "react-redux";
import {getCategoryIcon} from '../../utils/transListTableUtils';
import { Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';


function getChartData(transactions) {
    let categoryCount = {};

    console.log("INITIALIZED DICTIONARY ", categoryCount);
	transactions.map(t => {
        if (Object.keys(categoryCount).indexOf(t.cat__cat_name) >= 0) {
            categoryCount[t.cat__cat_name]["count"] +=1;
            categoryCount[t.cat__cat_name]["transactions"].push(t);
        } else {
            categoryCount[t.cat__cat_name] = {count : 1, transactions:[t]}
        }
		
	});
	return categoryCount;
}


const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080'];

const renderCustomizedLabel = (props) => {
    console.log('PROPS', props)
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    let icon = getCategoryIcon(props.category);
    return (
        <>
            <svg
                x={x - 12}
                y={y - 12}
                fill="#666"
                textAnchor={"middle"}
                dominantBaseline="central"
                width={30}
                height={30}
                viewBox="0 0 1024 1024"
            >
                {icon}
            </svg>
            <text x={x } y={y + 35 }  textAnchor={'middle'} fill="#000000" font-weight="bold" font-size="0.8rem">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
            <g>
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${props.category}`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" font-size="0.8rem">
                    {` Count: ${value}`}
                </text>
        </g>
        </>
    );
};



function CategoriesPieChart ({transactionList}) {

	const category_wise_data = getChartData(transactionList);
    const chart_data = Object.keys(category_wise_data).map( key => (
            {
                category: key,
                count: category_wise_data[key]['count']
            }
        )
    );
	// static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';
	console.log("TRANSACTION LIST IN CHARTS", transactionList, chart_data);
	return (
		<Wrapper>
            <Typography variant="h6" align="left">
                <b>Category Wise Analysis: </b>
            </Typography>
			<ResponsiveContainer width={'100%'} height={400}>
                <PieChart width={600} height={600}>
                    <Pie
                        data={chart_data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="count"
                    >
                        {chart_data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
			</ResponsiveContainer>
		</Wrapper>
	);
}

export default memo(CategoriesPieChart);