import React from "react";

const Dropdown = (title, options) => {
	return (
		<div class="dropdown">
			<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
				{title}
			</button>
			<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{options.map(option => {
					return (
						<li><a class="dropdown-item" href="#">{option}</a></li>
					);
				})}
			</ul>
		</div>
	);
};

export default Dropdown;