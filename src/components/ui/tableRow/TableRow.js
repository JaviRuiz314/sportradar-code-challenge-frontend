import React from "react";

const TableRow = ({row}) => {
    console.log('ROW');
    console.log(row);
    return (
        <tr>
            {Object.values(row).map((item, index) => {
                return <td key={index}>{item}</td>;
            })}
        </tr>
    );
};

export default TableRow;