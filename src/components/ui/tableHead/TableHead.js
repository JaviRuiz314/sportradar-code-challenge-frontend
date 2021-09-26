import './TableHead.css';
import React from "react";

const TableHeadItem = ({ item }) => {
    return (
        <td title={item} className='header-columns'>
            {item}
        </td>
    );
};

export default TableHeadItem;