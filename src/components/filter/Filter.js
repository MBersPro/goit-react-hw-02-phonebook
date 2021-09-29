import React from "react";

const Filter = ({setFilter, filter}) => {
    return (
        <input
            type="text"
            onChange={setFilter}
            value={filter}
        />
    );
}

export default Filter;
