import './DataTable.css';
import { Component } from "react";
import TableRow from "../tableRow/TableRow";
import TableHeadItem from "../tableHead/TableHead";


class DataTable extends Component {
    constructor(props) {
		super(props);
		this.state = {
			customClass: ''
		}
	}

    render() {
        return (
            <table className={this.state.customClass}>
            <thead>
                <tr>
                    {this.props.columnList.map((column) => {
                        return <TableHeadItem key={column.label} item={column.name} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {this.props.data.map((row, index) => {
                    return <TableRow key={index} row={row} />;
                })}
            </tbody>
        </table>
        );
    }
}

export default DataTable;