// import React from "./node_modules/react";
import React from "react";


const SearchForm = (props) => {
    return (
        <>
            <form>
                <label>Search:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    type="text"
                    name="search"
                    placeholder="Denver"
                ></input>
                <button onClick={props.handleFormSubmit}>Search</button>
            </form>
        </>
    );
};

export default SearchForm;