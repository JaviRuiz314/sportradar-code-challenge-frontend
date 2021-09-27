import './TableRow.css';
import React from "react";

const TableRow = ({ row }) => {

    function renderTextOrList(item) {
        let render = item;
        if (Array.isArray(item) && item[0] !== "") {
            render =
                <ul className='list-cell'>
                    {item.map((element, index) => {
                        return <li key={index} className='list-elements '>{element}</li>
                    })}
                </ul>;
        }
        return render;
    }
    return (
        <tr>
            {Object.values(row).map((item, index) => {
                return <td key={index}>{renderTextOrList(item)}</td>;
            })}
        </tr>
    );
};

export default TableRow;