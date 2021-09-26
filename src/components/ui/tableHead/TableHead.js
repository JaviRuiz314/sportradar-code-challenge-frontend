import './TableHead.css';
import { Component } from "react";

class TableHeadItem extends Component {
    render() {
        return (
            <td title={this.props.item} className='header-columns'>
            {this.props.item}
        </td>
        );
    }
}

export default TableHeadItem;