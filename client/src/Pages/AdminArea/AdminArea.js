import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { MDBRow, MDBCol, MDBListGroup, MDBListGroupItem } from 'mdbreact';
import Nav from "../../components/Nav/Nav";
import "./AdminArea.css";
import API from "../../utils/API";


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

    const [properties, setProperties] = useState([]);
    const [_users, setUsers] = useState([]);
    const [pieData, setPieData] = useState([]);

    // Loads top properties
    useEffect(() => {
        loadProperties();
        getUsers();
    }, []);

    // Loader
    function loadProperties() {
        console.log("Test property function");
        API.getTopProperties(3)
            .then(payloadFromApiCall => {
                const theProperties = payloadFromApiCall.data;
                console.log("the top x properties", theProperties);
                let ourBarData = [];
                for (let oneProperty of theProperties) {
                    ourBarData.push({ name: oneProperty.address, Yesterday: oneProperty.listPrice, Today: oneProperty.listPrice, amt: oneProperty.listPrice });
                }
                setProperties(ourBarData);

            })
            .catch(err => console.log(err));
    };

    function diffDates(date1, date2) {
        let dt1 = date1;
        let dt2 = date2;
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
    };

    function getUsers() {
        console.log("Test User function");
        API.getUsers()
            .then(payloadFromApiCall => {
                const theUsers = payloadFromApiCall.data;
                console.log("the top x users", theUsers);
                setUsers(theUsers);
                let userDates = [];
                for (let user of theUsers) {
                    let Difference_In_Days = diffDates(new Date(Date.now()), new Date(Date.parse(user.lastLogin)));
                    console.log("Difference_In_Days", Difference_In_Days);
                    userDates.push({ name: user._id, value: Difference_In_Days });
                }
                console.log("setPieData", userDates);
                setPieData(userDates);
            })
            .catch(err => console.log(err));
    };
    return (
        <>
            <Nav />
            <br></br>
                <MDBRow c>
                    <MDBCol md="4">
                        <h1 className="userStats align-center">User List</h1>
                    </MDBCol>
                    <MDBCol md="4">
                        <h1 className="userStats align-center">User Activity</h1>
                    </MDBCol>
                    <MDBCol md="4">
                        <h1 className="topProperties">Top Favorite Properties</h1>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className="align-items-center" md="4">
                        <div>
                            <MDBListGroup className="d-flex" style={{ width: "22rem", margin: "auto" }}>
                                {
                                    _users.map(user => (
                                        <MDBListGroupItem key={user._id} href={"/users/" + user._id} >
                                            {user.firstName} {user.lastName}
                                        </MDBListGroupItem>
                                    )
                                    )
                                }
                            </MDBListGroup>
                            </div>
                    </MDBCol>
                    <MDBCol className="align-items-center" md="4" >
                            <PieChart style={{ width: "60rem", margin: "auto" }}>
                                <Pie
                                    data={pieData}
                                    cx={300}
                                    cy={300}
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={160}
                                    fill="#8884d8"
                                    dataKey="value"
                                    margin={{
                                        top: 5, right: 30, left: 20, bottom: 5,
                                    }}
                                >
                                    {
                                        pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                    }
                                </Pie>
                            </PieChart>
                        
                    </MDBCol>
                    <MDBCol className="align-items-center" md="4" style={{ width: "60rem", margin: "auto" }} >
                        
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
                                <Bar dataKey="Today" fill="#8884d8" />
                                <Bar dataKey="Yesterday" fill="#82ca9d" />
                            </BarChart>
                        
                    </MDBCol>
                </MDBRow>
        </>
    );

}



export default AdminArea;
