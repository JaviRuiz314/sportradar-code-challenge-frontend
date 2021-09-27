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
				time: `${_.get(listOfMatches, 'time.time','')} - ${_.get(listOfMatches, 'time.date','')}`,
				homeTeam: `${_.get(listOfMatches, 'teams.home','')}`,
				result: `${_.get(listOfMatches, 'score.home')} - ${_.get(listOfMatches, 'score.away')}`,
				awayTeam: `${_.get(listOfMatches, 'teams.away', '')}`,
				events: _.split(_.get(listOfMatches, 'events', null), ',')
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
							<Dropdown title={this.state.dropDownSelection} options={Object.keys(this.state.data)} handleDropdownClick={this.handleDropdownCallback} />
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