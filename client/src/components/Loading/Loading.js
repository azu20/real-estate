import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="spinner-border text-success" role="status">
      <span className="sr-only">
        Loading...
          </span>
    </div>
  );
};

export default Loading;