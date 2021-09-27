import { Component } from "react";

class Dropdown extends Component {

	constructor(props){
		super(props);
        this.state = {
			isOpen: false
        }
    }

	 handleClick = (event) => {
        this.props.handleDropdownClick(event.target.text);
		this.toggleOpen();
        event.preventDefault();
	}
	
	toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

	render() {
		const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
		return (
			<div className="dropdown" >
				<button 
				className="btn btn-secondary dropdown-toggle"
				type="button" 
				id="dropdownMenuButton"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
				onClick = {this.toggleOpen}
				>
					{this.props.title}
				</button>
				<div onBlur={this.toggleClose}>
				<ul className={menuClass} aria-labelledby="dropdownMenuButton1" >
					{this.props.options.map((option, index) => {
						return (
							<li key={index}><a className="dropdown-item" onClick={this.handleClick}>{option}</a></li>
						);
					})}
				</ul>
				</div>
	
			</div>
		);
	}
};

export default Dropdown;