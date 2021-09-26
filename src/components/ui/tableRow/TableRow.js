import './TableRow.css';
import React from "react";

const TableRow = ({row}) => {
    return (
        <tr>
            {Object.values(row).map((item, index) => {
                return <td key={index}>{item}</td>;
            })}
        </tr>
    );
};

export default TableRow;