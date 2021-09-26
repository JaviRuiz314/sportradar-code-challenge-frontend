import './TableRow.css';
import { Component } from "react";


class TableRow extends Component {
    render() {
        return (
            <tr>
            {Object.values(this.props.row).map((item, index) => {
                return <td key={index}>{item}</td>;
            })}
        </tr>
        );
    }
};

export default TableRow;