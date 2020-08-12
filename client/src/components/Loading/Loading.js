import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loading.css";

const Loading = () => {
    return (
        <Spinner animation="border" role="status" className="loading"></Spinner>
    );
};

export default Loading;