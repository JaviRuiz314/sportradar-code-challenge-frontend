import React from "react";
import TableRow from "../tableRow/TableRow";
import TableHeadItem from "../tableHead/TableHead";

const DataTable = ({ columnList, data, customClass }) => {
    return (
        <table className={customClass}>
            <thead>
                <tr>
                    {columnList.map((column) => {
                        return <TableHeadItem key={column.label} item={column.name} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => {
                    console.log('DATA on main');
                    console.log(row);
                    return <TableRow key={index} row={row} />;
                })}
            </tbody>
        </table>
    );
};

export default DataTable;