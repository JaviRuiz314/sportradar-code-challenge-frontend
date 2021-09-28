import './Main.css'

import DataTable from "../../ui/dataTable/DataTable";
import Dropdown from "../../ui/dropdown/Dropdown"
import _ from 'lodash';
import { Component } from 'react';
import axios from 'axios';
import { MIDDLEWARE_LINK } from "../../../shared/utils";


const
	data = {
		'tournament': [{
			time: {
				time: undefined,
				date: undefined
			},
			teams: {
				away: undefined,
				home: undefined
			},
			result: {
				away: undefined,
				home: undefined
			},
			events: undefined
		}]
	},
	columns = [
		{
			label: 'time',
			name: 'Time'
		},
		{
			label: 'homeTeam',
			name: 'Home'
		},
		{
			label: 'result',
			name: ''
		},
		{
			label: 'awayTeam',
			name: 'Away'
		},
		{
			label: 'events',
			name: 'Events'
		}
	];

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data,
			dropDownSelection: 'tournament'
		}
	}

	componentDidMount = async () => {
		const apiData = await axios.get(MIDDLEWARE_LINK);
		this.setState({
			data: apiData.data,
			dropDownSelection: Object.keys(apiData.data)[0]
		});
	}

	scapeNullValues(item, path, valueToScape) {
		return _.get(item, path) === valueToScape ? '' : _.get(item, path);
	}

	processRecords() {
		const defaultOption = this.state.data[Object.keys(this.state.data)[0]];
		let list = [];
		if (this.state.dropDownSelection === 'tournament') {
			list = defaultOption;
		} else {
			list = this.state.data[this.state.dropDownSelection];
		}
		return list.map(listOfMatches => {
			return listOfMatches = {
				time: `${this.scapeNullValues(listOfMatches, 'time.time', null)} - ${this.scapeNullValues(listOfMatches, 'time.date', null)}`,
				homeTeam: `${this.scapeNullValues(listOfMatches, 'teams.home', null)}`,
				result: `${this.scapeNullValues(listOfMatches, 'score.home', null)} - ${this.scapeNullValues(listOfMatches, 'score.away', null)}`,
				awayTeam: `${this.scapeNullValues(listOfMatches, 'teams.away', null)}`,
				events: _.split(this.scapeNullValues(listOfMatches, 'events', null), ',')
			}
		});
	}

	handleDropdownCallback = (value) => this.setState({ dropDownSelection: value });

	render() {
		const processRecords = this.processRecords();
		return (
			<div className="container-fluid main">
				<div className='row justify-content-center'>
					<div>
						<div className='mt-3 d-flex justify-content-center'>
							<div>
								<p>Select the tournament to review the results: </p>
								<Dropdown title={this.state.dropDownSelection} options={Object.keys(this.state.data)} handleDropdownClick={this.handleDropdownCallback} />
							</div>
						</div>
						<div className='mt-3 d-flex justify-content-center'>
							<DataTable columnList={columns} data={processRecords} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;