import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { MDBBadge, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBContainer } from 'mdbreact';
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
    const [pieData, setPieData] = useState({});

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
                    ourBarData.push({ name: oneProperty.address, listprice: oneProperty.listPrice });
                }
                setProperties(ourBarData);

            })
            .catch(err => console.log(err));
    };

    function diffDates(date1, date2) {
        let Difference_In_Time = date2.getTime() - date1.getTime();
        let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        return (Math.floor(Difference_In_Days));
    }

    function getUsers() {
        console.log("Test User function");
        API.getUsers()
            .then(payloadFromApiCall => {
                const theUsers = payloadFromApiCall.data;
                console.log("the top x users", theUsers);
                setUsers(theUsers);

                let userDates = {

                    'Last 7 Days': 0,
                    '7 - 14 Days Ago': 0,
                    'Over 2 Weeks Ago': 0,
                    'Over 1 Month Ago': 0
                };

                for (let user of theUsers) {
                    let Difference_In_Days = diffDates(new Date(Date.parse(user.lastLogin)), new Date());


                    if (Difference_In_Days <= 7) {
                        userDates['Last 7 Days'] = userDates['Last 7 Days'] + 1
                    } else if (Difference_In_Days > 7 || Difference_In_Days <= 14) {
                        userDates['7 - 14 Days Ago'] = userDates['7 - 14 Days Ago'] + 1
                    } else if (Difference_In_Days > 14 || Difference_In_Days <= 30) {
                        userDates['Over 2 Weeks Ago'] = userDates['Over 2 Weeks Ago'] + 1
                    } else {
                        userDates['Over 1 Month Ago'] = userDates['Over 1 Month Ago'] + 1
                    }
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
            <MDBContainer>


                <MDBRow>
                    <MDBCol className="align-items-center p-2" sm="12" md="6" lg="4">
                        <h1 className="userStats align-center">User List</h1>
                        <div>
                            <MDBListGroup className="d-flex" style={{ width: "16rem", margin: "auto" }}>
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
                    <MDBCol className="align-items-center p-2" sm="12" md="6" lg="4">
                        <h1 className="userStats align-left">User Activity</h1>
                        <div>
                            <MDBListGroup style={{ width: "22rem" }}>

                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">Last 7 Days
                            <MDBBadge color="primary"
                                        pill>{pieData['Last 7 Days']}</MDBBadge>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">7 - 14 Days Ago
                            <MDBBadge
                                        color="primary" pill>{pieData['7 - 14 Days Ago']}</MDBBadge>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">Over 2 Weeks Ago
                            <MDBBadge color="primary"
                                        pill>{pieData['Over 2 Weeks Ago']}</MDBBadge>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">Over 1 Month Ago
                                 <MDBBadge color="primary" pill>{pieData['Over 1 Month Ago']}</MDBBadge>
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </div>
                    </MDBCol>
                    <MDBCol className="text-center p-2" md="12" lg="4" >
                        <h1 className="userStats ml-4 text-center">Top Saved Properties</h1>
                        <BarChart
                            width={450}
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
                            <Bar dataKey="listprice" fill="#8884d8" />
                            {/* <Bar dataKey="Yesterday" fill="#82ca9d" /> */}
                        </BarChart>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );

}



export default AdminArea;
