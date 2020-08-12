// import React from "react";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import Nav from "../../components/Nav/Nav";
import "./AdminArea.css";
import API from "../../utils/API";


const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


function AdminArea() {

    const jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';
    const [properties, setProperties] = useState([]);

    // Loads top properties
    useEffect(() => loadProperties(), []);

    // Loader
    function loadProperties() {
        console.log("Test");
        API.getTopProperties(5)
            .then(payloadFromApiCall => {
                const theProperties = payloadFromApiCall.data;


                console.log("the top x properties", theProperties);
                let outBarData = [];
                for (let oneProperty of theProperties) {
                    outBarData.push({ name: oneProperty.address, uv: 3490, pv: 4300, amt: oneProperty.listPrice });
                }
                setProperties(outBarData);
            })
            .catch(err => console.log(err));
    };

    function loadUser() {
        console.log("Test");
        API.getTopProperties(5)
            .then(payloadFromApiCall => {
                const theProperties = payloadFromApiCall.data;


                console.log("the top x properties", theProperties);
                let outBarData = [];
                for (let oneProperty of theProperties) {
                    outBarData.push({ name: oneProperty.address, uv: 3490, pv: 4300, amt: oneProperty.listPrice });
                }
                setProperties(outBarData);
            })
            .catch(err => console.log(err));
    };


    return (
        <>
            <Nav />
            <br></br>
            <MDBContainer className="adminPage">
                <MDBRow className="titles align-items-center">
                    <MDBCol md="6">
                        <h1 className="userStats align-center">Price Ranges</h1>
                    </MDBCol>
                    <MDBCol md="6">
                        <h1 className="topProperties">Price Ranges</h1>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    {/* <MDBCol className="chartsCol align-items-center" md="4">
                        <div> */}

                            {/* <BarChart
                                width={500}
                                height={300}
                                data={pieData}
                                margin={{
                                    top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <ReferenceLine y={0} stroke="#000" />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart> */}
                        {/* </div>
                    </MDBCol> */}
                    <MDBCol className="align-items-center" md="6">
                        <div>
                            <PieChart width={500} height={600}>
                                <Pie
                                    data={pieData}
                                    cx={300}
                                    cy={300}
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={160}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {
                                        pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                    }
                                </Pie>
                            </PieChart>
                        </div>
                    </MDBCol>
                    <MDBCol className="align-items-center" md="6">
                        <div>
                            <BarChart
                                width={600}
                                height={400}
                                data={properties}
                                margin={{
                                    top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </div>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
        </>
    );

}



export default AdminArea;
